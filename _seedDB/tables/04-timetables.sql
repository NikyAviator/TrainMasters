CREATE TABLE timetables  (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  startTime TIME NOT NULL,
  routeId int(11) NOT NULL,
	trainId int(11) NOT NULL,
  notWeekends BOOL NOT NULL,
  PRIMARY KEY (id),
  KEY routeId (routeId),
  KEY trainId (trainId),
  CONSTRAINT _timetables_routeId FOREIGN KEY (Id) REFERENCES routes (Id),
  CONSTRAINT _timetables_trainId FOREIGN KEY (Id) REFERENCES trains (Id)
);