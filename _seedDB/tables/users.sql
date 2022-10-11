
CREATE TABLE users  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  userTypeId int(11) NOT NULL,
  email varchar(100) NOT NULL,
  passwor varchar(100) NOT NULL,
	customerId int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY userTypeId (userTypeId),
  KEY customerId (customerId),
  CONSTRAINT _timeTables_userTypeId FOREIGN KEY (Id) REFERENCES userTypes (Id),
  CONSTRAINT _timeTables_customerId FOREIGN KEY (Id) REFERENCES customers (Id)
);