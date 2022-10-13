import { factory } from '../utilities/FetchHelper';
const { booking } = factory;

export async function carriageWithSeats() {
  let seats = booking.findSeats();
  return seats;
}

export async function tickets() {
  let tickets = booking.findTickets();
  return tickets;
}
