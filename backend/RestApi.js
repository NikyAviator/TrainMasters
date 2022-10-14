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
    this.start();
  }

  start() {
    this.app.get('/api/stations', function (req, res) {
      let sql = 'SELECT * FROM stations';
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.get('/api/:view/:station', function (req, res) {
      let view = req.params.view;
      let station = req.params.station;
      let sql = `SELECT * FROM ${view} WHERE stationName = '${station}'`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.get('/api/:view/:route/:order', function (req, res) {
      let view = req.params.view;
      let order = req.params.order;
      let route = req.params.route;
      let sql = `SELECT * FROM ${view} WHERE routeName ='${route}' and rorder ='${order}'`;
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
    this.app.get('/api/tests', function (req, res) {
      let sql = 'SELECT * FROM tests';
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.get('/api/bookings', function (req, res) {
      let sql = 'SELECT * FROM bookings';
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.post('/api/bookings', function (req, res) {
      let bookingId = req.body.bookingId;
      let fromDeparture = req.body.fromDeparture;
      let toDestination = req.body.toDestination;
      let arrival = req.body.arrival;
      let departure = req.body.departure;
      let price = req.body.price;
      let seatId = req.body.seatId;
      let carriageId = req.body.carriageId;
      let timeTableId = req.body.timeTableId;
      let bdate = req.body.bdate;
      let sql = `INSERT INTO bookings (bookingId,fromDeparture,toDestination,arrival,departure,price,seatId,carriageId,timeTableId,bdate) VALUES ('${bookingId}','${fromDeparture}','${toDestination}','${arrival}','${departure}',${price},${seatId},${carriageId},${timeTableId},'${bdate}')`;
      db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  }
};
