CREATE TABLE trainCarriages  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  carriageId int(11) NOT NULL,
  trainId int(11) NOT NULL,
  PRIMARY KEY (id),
  KEY trainId (trainId),
  KEY carriageId (Id),
  CONSTRAINT trainId FOREIGN KEY (id) REFERENCES trains (id),
  CONSTRAINT carriageId FOREIGN KEY (id) REFERENCES carriages (id)
);