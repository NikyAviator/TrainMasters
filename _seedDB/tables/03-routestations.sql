CREATE TABLE routestations  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  stationId int(11) NOT NULL,
  arrivalTime int(11) NOT NULL,
  departureTime int(11) NOT NULL,
  routeId int(11) NOT NULL,
  platform varchar(100) NOT NULL,
  rorder int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY routeId (routeId),
  KEY stationId (stationId),
  CONSTRAINT routeId FOREIGN KEY (id) REFERENCES routes (id),
  CONSTRAINT stationId FOREIGN KEY (id) REFERENCES stations (id)
);