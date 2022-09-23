CREATE TABLE seats  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  seatNumber varchar(100) NOT NULL,
  handicapSeat varchar(100) NOT NULL,
  trainCartId varchar(100) NOT NULL,
  PRIMARY KEY (id),
  KEY trainCartId (trainCartId),
  CONSTRAINT trainCartId FOREIGN KEY (trainCartId) REFERENCES trainCarts (id)
);