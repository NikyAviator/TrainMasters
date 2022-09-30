CREATE TABLE customers (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  firstName varchar(100) NOT NULL,
  lastName varchar(100) NOT NULL,
  phoneNumber varchar(100) NULL,
  travelerType varchar(100) NULL,
  PRIMARY KEY (id)
);