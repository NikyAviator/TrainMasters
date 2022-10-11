CREATE TABLE tickets  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  arrival varchar(100) NOT NULL,
  departure varchar(100) NOT NULL,
  price int(11) NOT NULL,
  bookingId int(11) NOT NULL,
  seatId int(11) NOT NULL,
  carriageId int(11) NOT NULL,
  timeTableId int(11) NOT NULL,
  bdate varchar(100) not null,
  PRIMARY KEY (id),
  KEY seatId (seatId),
  KEY timeTableId (timeTableId),
  CONSTRAINT seatId FOREIGN KEY (id) REFERENCES seats (id),
  CONSTRAINT timeTableId FOREIGN KEY (id) REFERENCES timeTables (id)
);