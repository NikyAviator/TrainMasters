import { factory } from '../utilities/FetchHelper';
const { sthlmgbg, gbgsthlm, gbghyllie } = factory;

export async function findRoute(start, end) {
  if (start === end) return console.log('Cannot go to same');
  let a = await getRoute(start, end);
  let obj = { ...a };
  return obj;
}

async function getRoute(start, end) {
  let from = await sthlmgbg.find('tests', start);
  let to = await sthlmgbg.find('tests', end);

  const fromResults = from.filter(({ rorder: rorder, routeName: routeName }) =>
    to.some(
      ({ rorder: rorder2, routeName: routeName2 }) =>
        !(rorder > rorder2) && routeName === routeName2
    )
  );
  const toResults = to.filter(({ rorder: rorder, routeName: routeName }) =>
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
      x.arrivalLastStation = getTime(e.startTime, e.arrivalLastStation);
      e.departureTimeFrom = getTime(e.startTime, e.arrivalTime);
      e.arrivalTimeTo = getTime(e.startTime, x.departureTime);
    });
  });
  return from, to;
}
function checkTime(time, time2) {
  // create proper date with the string
  var date1 = new Date('2022-01-01T' + time);
  var date2 = new Date('2022-01-01T' + time2);
  if (date1.getTime() < date2.getTime()) {
    return true;
  }
}
