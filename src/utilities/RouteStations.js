import { factory } from '../utilities/FetchHelper';
const { route } = factory;

export async function findRoute(start, end) {
  if (start === end) return console.log('Cannot go to same');
  let a = await getRoute(start, end);
  let obj = { ...a };
  return obj;
}

async function getRoute(start, end) {
  let from = await route.findStations('routesInfo', start);
  let to = await route.findStations('routesInfo', end);

  let fromResults = from.filter(({ rorder: rorder, routeName: routeName }) =>
    to.some(
      ({ rorder: rorder2, routeName: routeName2 }) =>
        !(rorder > rorder2) && routeName === routeName2
    )
  );
  let toResults = to.filter(({ rorder: rorder, routeName: routeName }) =>
    from.some(
      ({ rorder: rorder2, routeName: routeName2 }) =>
        !(rorder < rorder2) && routeName === routeName2
    )
  );
  let results = getFinalRoutes(fromResults, toResults);
  return results;
}

function getTime(time, addHour) {
  let date = new Date('2022-01-01T' + time);
  let newDate = new Date(date.getTime() + addHour * 60000);
  let newDateSplit = newDate.toTimeString().split(':');
  let newTimeString = newDateSplit[0] + ':' + newDateSplit[1];
  return newTimeString;
}

function getFinalRoutes(from, to) {
  from.forEach((x) => {
    to.forEach((e) => {
      e.startStation = x.stationName;
      e.endStation = e.stationName;
      e.departureTimeFrom = getTime(e.startTime, e.arrivalTime);
      e.arrivalTimeTo = getTime(e.startTime, x.departureTime);
    });
  });
  from.forEach((x) => {
    to.forEach((e) => {
      if (!checkTime(e.arrivalTimeTo, e.departureTimeFrom)) {
        (e.arrivalTimeTo = getTime(e.startTime, x.arrivalTime)),
          (e.departureTimeFrom = getTime(e.startTime, e.arrivalTime));
      }
    });
  });

  return from, to;
}

function checkTime(time, time2) {
  let date1 = new Date('2022-01-01T' + time);
  let date2 = new Date('2022-01-01T' + time2);
  if (date1.getTime() < date2.getTime()) {
    return true;
  }
}
export async function itsWeekend(route) {
  route = Object.values(route).filter(
    ({ notweekends: notweekends }) => notweekends !== 1
  );
  return route;
}

export async function carriageWithSeats() {
  let a = route.findSeats();
  return a;
}

export async function tickets() {
  let a = route.findTickets();
  return a;
}
