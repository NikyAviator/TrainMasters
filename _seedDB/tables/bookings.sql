CREATE TABLE bookings (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  customerId int(11) NOT NULL,
  qrCode varchar(100) NOT NULL,
  startTime TIME NOT NULL,
  PRIMARY KEY (id)
);
