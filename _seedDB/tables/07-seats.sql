CREATE TABLE seats  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  amountSeats int(11) NOT NULL,
  handicapSeat int(11) NOT NULL,
  carriagesId int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY carriagesId (Id),
  CONSTRAINT carriagesId FOREIGN KEY (id) REFERENCES carriages (id)
);