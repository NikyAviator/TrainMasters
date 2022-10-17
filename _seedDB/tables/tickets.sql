CREATE TABLE tickets (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  bookingId varchar(100) NOT NULL,
  qrCode varchar(100) NOT NULL,
  PRIMARY KEY (id)
);
