CREATE TABLE traincarriages  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  trainId int(11) NOT NULL,
  carriage int(11) NOT NULL,
  carriagesTypeId int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY trainId (trainId),
  KEY carriagesTypeId (Id),
  CONSTRAINT _trainCarriages_trainId FOREIGN KEY (Id) REFERENCES trains (Id),
  CONSTRAINT _trainCarriages_carriagesTypeId FOREIGN KEY (Id) REFERENCES carriagesTypes (Id)
);

