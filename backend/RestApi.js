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
    this.getAllstations();
  }

  getAllstations() {
    this.app.get('/api/stations', function (req, res) {
      let sql = 'SELECT * FROM stations';
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.get('/api/:routes/:station', function (req, res) {
      let routes = req.params.routes;
      let station = req.params.station;
      let sql = `SELECT * FROM ${routes} WHERE stationName = '${station}'`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    this.app.get('/api/trains', function (req, res) {
      let sql = 'SELECT * FROM trains';
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  }
};
