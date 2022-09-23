CREATE TABLE tickets  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
   arrival varchar(100) NOT NULL,
   departure varchar(100) NOT NULL,
   price int(11) NOT NULL,
  bookingId int(11) NOT NULL,
 seatId int(11) NOT NULL,
  timeTableId int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY bookingId (bookingId),
  KEY seatId (seatId),
   KEY timeTableId (timeTableId),
  CONSTRAINT bookingId FOREIGN KEY (id) REFERENCES bookings (id),
  CONSTRAINT seatId FOREIGN KEY (id) REFERENCES seats (id),
  CONSTRAINT timeTableId FOREIGN KEY (id) REFERENCES timeTables (id)
);