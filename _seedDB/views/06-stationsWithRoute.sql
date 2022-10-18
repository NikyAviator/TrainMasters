CREATE view stationsWithRoute as 
select stationName, routeName from routestations rs
left join stations s
on s.id = rs.stationId
left join routes r
on r.id = rs.routeId