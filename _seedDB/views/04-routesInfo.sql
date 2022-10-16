create view routesInfo as
select arrivalTime,departureTime,platform,stationName,routeName,rorder,startTime,trainId,trainNumber,direction,notweekends,tt.id as timeTableId
 from routestations o
left join stations j 
  on o.stationId = j.id
left join routes r 
on r.id  = o.routeId 
left join timetables tt 
on tt.routeId = r.id
left join trains t
on t.id=tt.id
where o.routeId
ORDER BY rorder;