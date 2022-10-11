create view tests as
select trainId,seatNumber,handicapSeat,carriagesTypesId,carriage from seats s
left join traincarriages t 
on t.carriagesTypeId  = s.carriagesTypesId
order by trainId,seatNumber,carriage