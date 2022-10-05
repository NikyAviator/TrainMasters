CREATE TABLE seats  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  seatNumber int(11) NOT NULL,
  handicapSeat BOOL NOT NULL,
  carriagesId int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY carriagesId (Id),
  CONSTRAINT carriagesId FOREIGN KEY (id) REFERENCES carriages (id)
);