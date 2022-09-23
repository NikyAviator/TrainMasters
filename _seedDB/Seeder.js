// © Thomas Frank, Node Hill
// MIT licensed
// Create and seed a MySQL database

const fs = require('fs');
const path = require('path');
const db = require('../backend/DatabaseQueryer');

module.exports = class Seeder {
  static async seed() {
    console.log('\n\nSEEDING DB\n' + '-'.repeat(60) + '\n');
    db.verbose = true;
    await db.query('SET foreign_key_checks = 0;');
    await this.createTablesAndViews();
    await this.insertData();
    await db.query('SET foreign_key_checks = 1;');
    console.log('\nAll done!\n');
    process.exit();
  }

  static async createTablesAndViews() {
    const tableAndViewDefs = [
      ...this.readSqlFiles('./', 'tables'),
      ...this.readSqlFiles('./', 'views'),
    ];

    for (let sql of tableAndViewDefs) {
      // createa and run drop query
      let dropSql = '';
      if (sql.includes('CREATE TABLE')) {
        dropSql =
          'DROP TABLE IF EXISTS ' + sql.split('CREATE TABLE ')[1].split('(')[0];
      }
      if (sql.includes('CREATE VIEW ')) {
        dropSql =
          'DROP VIEW IF EXISTS ' + sql.split('CREATE VIEW ')[1].split(' AS')[0];
      }
      dropSql && (await db.query(dropSql));
      // run create query
      let defaults =
        ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ' +
        'COLLATE=utf8mb4_swedish_ci;';
      sql = sql.includes('CREATE TABLE') ? sql.replace(';', defaults) : sql;
      await db.query(sql);
    }
  }

  static async insertData() {
    let data = this.readJsonFiles('./', 'data');
    console.log(
      data,
      'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
    );
    for (let [tableName, rows] of data) {
      let keys = Object.keys(rows[0]);
      let qMarks = ('(' + '?,'.repeat(keys.length).slice(0, -1) + '),')
        .repeat(rows.length)
        .slice(0, -1);
      let sql = `
        INSERT INTO ${tableName}(${keys}) 
        VALUES ${qMarks}`;
      let params = rows.map((x) => Object.values(x)).flat();
      await db.query(sql, params);
    }
  }

  static readSqlFiles(...pathParts) {
    pathParts.unshift(__dirname);
    return fs
      .readdirSync(path.join(...pathParts))
      .filter((x) => x.slice(-4) === '.sql')
      .map((x) => path.join(...pathParts, x))
      .map((x) => fs.readFileSync(x, 'utf-8'));
  }

  static readJsonFiles(...pathParts) {
    console.log(
      pathParts.unshift(__dirname),
      'HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
    );

    return fs
      .readdirSync(path.join(...pathParts))
      .filter((x) => x.slice(-5) === '.json')
      .map((x) => path.join(...pathParts, x))
      .map((x) => [x, fs.readFileSync(x, 'utf-8')])
      .map((x) => [
        x[0].slice(x[0].lastIndexOf('-') + 1, -5),
        JSON.parse(x[1], null, '  '),
      ]);
  }

  static log(sql, params) {
    if (!this.verbose) {
      return;
    }
    params ? console.log(sql, params) : console.log(sql);
    console.log('\n' + '-'.repeat(60) + '\n');
    return true;
  }
};
