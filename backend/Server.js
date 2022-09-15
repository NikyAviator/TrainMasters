const path = require("path");
const express = require("express");
const RestApi = require("./RestApi");

module.exports = class Server {
  app = express();
  port = 4000;

  constructor() {
    this.start();
  }

  start() {
    this.app.use(express.json());
    new RestApi(this.app);
    this.serveDist();
    let message = `Backend listening on port ${this.port}`;
    this.app.listen(this.port, () => console.log(message));
  }

  serveDist() {
    // serve built dist (production React created with npm run build)
    this.app.use(express.static(path.join(__dirname, "../", "dist")));
    // make hard reload of frontend routes work
    // serve index.html if there is no matching backend route
    this.app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../", "dist", "index.html"));
    });
  }
};
