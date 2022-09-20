// © Thomas Frank, Node Hill
// MIT licensed
// A generic REST api
// DO NOT USE IN PRODUCTION SINCE NO
// PERMISSIONS/AUTH/ACL IMPLEMENTED

const db = require('./DatabaseQueryer');
db.verbose = true; // set to true to log db queries

module.exports = class RestApi {
  constructor(expressApp) {
    this.app = expressApp;
    this.handleRequestBodyJsonErrors();
    this.createRoutes();
  }

  handleRequestBodyJsonErrors() {
    this.app.use((error, req, res, next) =>
      error instanceof SyntaxError
        ? res.status(400) && res.json({ error })
        : next()
    );
  }

  async tablesAndViews() {
    return (await db.query('SHOW FULL TABLES'))
      .map((x) => Object.values(x))
      .map(([name, type]) => ({
        name,
        type: type.includes('VIEW') ? 'view' : 'table',
      }));
  }

  async isTable(checkName) {
    return !!(await this.tablesAndViews()).find(
      ({ name, type }) => name === checkName && type === 'table'
    );
  }

  async isView(checkName) {
    return !!(await this.tablesAndViews()).find(
      ({ name, type }) => name === checkName && type === 'view'
    );
  }

  createRoutes() {
    this.createTablesAndViewsRoute();
    this.createRouter();
  }

  createTablesAndViewsRoute() {
    this.app.get('/api/tablesAndViews', async (req, res) => {
      res.json(await this.tablesAndViews());
    });
  }

  async runQuery(res, sql, params) {
    let error,
      result = await db.query(sql, params).catch((err) => (error = err));
    if (error) {
      res.status(400);
      delete error.sql;
      result = { error };
    }
    return result;
  }

  createRouter() {
    let run = (req, res) => this.route(req, res);
    this.app.all('/api/:tableOrView', run);
    this.app.all('/api/:tableOrView/:id', run);
  }

  async route(req, res) {
    let { tableOrView: name, id } = req.params;
    let method = req.method.toLowerCase();
    method = method === 'patch' ? 'put' : method;
    let isTable = await this.isTable(name);
    let isView = await this.isView(name);
    // errors - wrong table/view name or wrong request metod
    if (!isTable && !isView) {
      res.status(404);
      res.json({ error: `${name} is not a table or view.` });
    } else if (isTable && !['get', 'post', 'put', 'delete'].includes(method)) {
      res.status(405);
      res.json({ error: `${method}-method not allowed on table ${name}.` });
    } else if (isView && method !== 'get') {
      res.status(405);
      res.json({ error: `${method}-method not allowed on table ${name}.` });
    }
    // go ahead
    else {
      this[method](name, id, req, res);
    }
  }

  async get(tableName, id, req, res) {
    id = !isNaN(+id) ? id : null;
    let [urlQueryParams, ors] = this.parseUrlQueryParams(req.url);
    let { sort, limit, offset } = urlQueryParams;
    ['sort', 'limit', 'offset'].forEach((x) => delete urlQueryParams[x]);
    sort = !sort
      ? sort
      : sort.split(',').map((x) => (x[0] === '-' ? x.slice(1) + ' DESC' : x));
    id && (urlQueryParams = { id });
    let [where, whereVals] = this.whereFromParams(urlQueryParams, ors);
    let result = await this.runQuery(
      res,
      `
        SELECT * FROM ${tableName} 
        ${where ? `WHERE ${where}` : ''}
        ${sort ? ` ORDER BY ${sort}` : ''}
        ${limit ? ' LIMIT ?' : ''}
        ${offset ? ' OFFSET ?' : ''}
      `,
      [
        ...(where ? whereVals : []),
        ...(limit ? [limit] : []),
        ...(offset ? [offset] : []),
      ]
    );
    if (id !== null && result.length === 0) {
      res.status(404);
    }
    res.json(id !== null ? result[0] || null : result);
  }

  async post(tableName, id, req, res) {
    let body = req.body;
    if (id || body.id) {
      res.status(400);
      res.json({ error: 'Do not use id:s with post requests!' });
      return;
    }
    let sql = `
      INSERT INTO ${tableName} (${Object.keys(body)})
      VALUES (${Object.keys(body).map((x) => '?')})  
    `;
    res.json(await this.runQuery(res, sql, Object.values(body)));
  }

  async put(tableName, id, req, res) {
    let body = req.body;
    if (!id) {
      res.status(400);
      res.json({
        error: 'You must provide an id in the URL with put requests!',
      });
      return;
    }
    if (body.id) {
      res.status(400);
      res.json({ error: 'You should not provide an id in the request body!' });
      return;
    }
    let sql = `
      UPDATE ${tableName} 
      SET ${Object.keys(body).map((x) => x + ' = ?')}
      WHERE id = ?
    `;
    res.json(await this.runQuery(res, sql, [...Object.values(body), id]));
  }

  async delete(tableName, id, req, res) {
    if (!id) {
      res.status(400);
      res.json({
        error: 'You must provide an id in the URL with delete requests!',
      });
      return;
    }
    let sql = `
      DELETE FROM ${tableName}
      WHERE id = ?
    `;
    res.json(await this.runQuery(res, sql, [id]));
  }

  parseUrlQueryParams(url) {
    // ≈ -> regular expression
    let operators = ['!=', '>=', '<=', '=', '>', '<', '≈'];
    let params = url.split('?', 2)[1];
    let keyVal = {};
    let ors = [];
    if (!params) {
      return [keyVal, ors];
    }
    for (let part of params.split('&')) {
      part = decodeURI(part);
      let operator = '';
      for (let op of operators) {
        if (part.includes(op)) {
          operator = op;
          break;
        }
      }
      if (!operator) {
        continue;
      }
      let [key, val] = part.split(operator);
      let or = key[0] === '|';
      or && (key = key.slice(1));
      ors[key] = or;
      val = isNaN(+val) ? val : +val;
      if (operator !== '=') {
        val = { [operator]: val };
      }
      keyVal[key] = val;
    }
    return [keyVal, ors];
  }

  whereFromParams(params, ors) {
    let where = [];
    let whereVals = [];
    for (let [key, val] of Object.entries(params)) {
      let isObj = val && typeof val === 'object';
      let operator = isObj ? Object.keys(val)[0] : '=';
      val = isObj ? Object.values(val)[0] : val;
      operator = operator == '≈' ? 'REGEXP' : operator;
      where.push((ors[key] ? ' OR  ' : ' AND ') + key + ' ' + operator + ' ?');
      whereVals.push(val);
    }
    where = where.join('');
    return [where.slice(5), whereVals];
  }
};
