CREATE TABLE seats  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  seatNumber int(11) NOT NULL,
  handicapSeat BOOL NOT NULL,
  carriagesTypesId int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY carriagesTypesId (Id),
  CONSTRAINT carriagesTypesId FOREIGN KEY (id) REFERENCES carriagesTypes (id)
);