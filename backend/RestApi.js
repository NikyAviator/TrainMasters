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
    this.app.get('/api/stationsWithRoute', function (req, res) {
      let sql = 'SELECT * FROM stationsWithRoute';
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.get('/api/routesInfo/:station', function (req, res) {
      let station = req.params.station;
      let sql = `SELECT * FROM routesInfo WHERE stationName = '${station}'`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    // this.app.get('/api/:view/:route/:order', function (req, res) {
    //   let view = req.params.view;
    //   let order = req.params.order;
    //   let route = req.params.route;
    //   let sql = `SELECT * FROM ${view} WHERE routeName ='${route}' and rorder ='${order}'`;
    //   let query = db.query(sql, (err, results) => {
    //     if (err) throw err;
    //     res.send(results);
    //   });
    // });

    this.app.get('/api/trains', function (req, res) {
      let sql = 'SELECT * FROM trains';
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.get('/api/seatsCarriage', function (req, res) {
      let sql = 'SELECT * FROM seatsCarriage';
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
    this.app.get('/api/bookings/:id', function (req, res) {
      let id = req.params.id;
      let sql = `SELECT * FROM bookings WHERE bookingId ='${id}'`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.post('/api/bookings', function (req, res) {
      let bookingId = req.body.bookingId;
      let fromDeparture = req.body.fromDeparture;
      let toDestination = req.body.toDestination;
      let rorderFrom = req.body.rorderFrom;
      let rorderTo = req.body.rorderTo;
      let arrival = req.body.arrival;
      let departure = req.body.departure;
      let price = req.body.price;
      let seatId = req.body.seatId;
      let trainId = req.body.trainId;
      let carriageId = req.body.carriageId;
      let timeTableId = req.body.timeTableId;
      let bdate = req.body.bdate;
      let typeOfSeat = req.body.typeOfSeat;
      let platform = req.body.platform;
      let platformFrom = req.body.platformFrom;
      let platformTo = req.body.platformTo;
      let trainNumber = req.body.trainNumber;
      let userId = req.body.userId;

      let sql = `INSERT INTO bookings (bookingId,fromDeparture,toDestination,rorderFrom,rorderTo,arrival,departure,price,seatId,trainId,carriageId,timeTableId,bdate,typeOfSeat,platformFrom,platformTo,trainNumber,userId) VALUES ('${bookingId}','${fromDeparture}','${toDestination}','${rorderFrom}','${rorderTo}','${arrival}','${departure}',${price},${seatId},${trainId},${carriageId},${timeTableId},'${bdate}','${typeOfSeat}','${platformFrom}','${platformTo}','${trainNumber}','${userId}')`;
      db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.post('/api/register', function (req, res) {
      let email = req.body.email;
      let firstName = req.body.firstName;
      let lastName = req.body.lastName;
      let passwor = req.body.passwor;

      let sql = `INSERT INTO users (email,firstName,lastName,passwor) VALUES ('${email}','${firstName}','${lastName}','${passwor}')`;
      db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    this.app.get('/api/users/:email/:passwor', function (req, res) {
      let email = req.params.email;
      let passwor = req.params.passwor;
      let sql = `SELECT * FROM users WHERE email ='${email}' and passwor='${passwor}'`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    this.app.get('/api/users/:email', function (req, res) {
      let email = req.params.email;
      let sql = `SELECT * FROM users WHERE email ='${email}'`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });

    this.app.get('/api/bookings/userId/:userId', function (req, res) {
      let userId = req.params.userId;
      let sql = `SELECT * FROM bookings WHERE userId ='${userId}'`;
      let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
  }
};
