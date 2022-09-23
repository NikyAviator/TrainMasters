import { factory } from '../utilities/FetchHelper';
const { sthlmgbg, gbgsthlm } = factory;

export async function findRoute(start, end) {
  let a = await test(start, end);
  let obj = { ...a };
  return obj;
}

async function test(start, end) {
  console.log(start, end);
  let from = await sthlmgbg.find('sthlmgbgs', start);
  let to = await sthlmgbg.find('sthlmgbgs', end);
  console.log(from);
  let orderFrom = from.find((x) => x.rorder);
  let orderTo = to.find((x) => x.rorder);
  console.log(from);
  let t;
  if (orderFrom.rorder > orderTo.rorder) {
    from = await getotherRoute(start);
    to = await getotherRoute(end);
    t = await testt(from, to);
    return t;
  } else {
    t = await testt(from, to);
    return t;
  }
}

function testt(from, to) {
  from.forEach((x) => {
    to.forEach((e) => {
      e.startStation = x.stationName;
      e.endStation = e.stationName;
      e.departureTimeFrom = getTime(e.startTime, e.arrivalTime);
      e.arrivalTimeTo = getTime(e.startTime, x.departureTime);
    });
  });
  return from, to;
}
async function getotherRoute(route) {
  let findRoute = await gbgsthlm.find('gbgsthlms', route);
  return findRoute;
}

function getTime(time, addHour) {
  // create proper date with the string
  var date = new Date('2022-01-01T' + time);
  // add 10 minutes
  var newDate = new Date(date.getTime() + addHour * 60000);
  // split the new string
  var newDateSplit = newDate.toTimeString().split(':');
  // get hour and minutes from split date
  var newTimeString = newDateSplit[0] + ':' + newDateSplit[1];
  return newTimeString;
}
