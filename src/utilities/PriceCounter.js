import { carriageWithSeats, bookings } from '../utilities/Bookings';

export function count(departure, arrival, travelerArray) {
  let getMinutes = departure - arrival;
  let countPriceFirstClass = getMinutes * 3.0;
  let countPriceSecondClass = getMinutes * 2.0;
  let countPricePerTravelerFirstClass = [];
  let countPricePerTravelerSecondClass = [];

  travelerArray.forEach((x) => {
    countPricePerTravelerFirstClass.push(
      countPriceFirstClass * translateTraveler(x)
    );
  });
  travelerArray.forEach((x) => {
    countPricePerTravelerSecondClass.push(
      countPriceSecondClass * translateTraveler(x)
    );
  });


  let finalPriceFirstClass = countPricePerTravelerFirstClass.reduce(
    (a, b) => a + b,
    0
  );
  let finalPriceSecondClass = countPricePerTravelerSecondClass.reduce(
    (a, b) => a + b,
    0
  );


  let prices = {
    firstClass: Math.round(finalPriceFirstClass),
    secondClass: Math.round(finalPriceSecondClass),
  };

  return prices;
}

function translateTraveler(traveler) {
  switch (traveler) {
    case 'Vuxen':
      return 1.0;
    case 'Barn':
      return 0.5;
    case 'Pensionär':
      return 0.9;
    case 'Student':
      return 0.85;
    case 'Ungdom':
      return 0.85;
  }
}

export async function countCapacity(price, trainId, timeTableId, date) {
  // gets all the bookings from database
  let getbookings = await bookings();
  //gets carriagesWithSeats
  let carriages = await carriageWithSeats();
  getbookings = getbookings.filter(
    (x) =>
      x.trainId === trainId && x.timeTableId === timeTableId && x.bdate === date
  );
  carriages = carriages.filter((x) => x.trainId === trainId);


  let countCapacityTrain =
    ((getbookings.length / carriages.length) * 100) / 100;
  let getDecimals = 1.0 - countCapacityTrain;
  
  price.firstClass = Math.round(price.firstClass * (1.5 - getDecimals));
  price.secondClass = Math.round(price.secondClass * (1.5 - getDecimals));
  return price;
}
