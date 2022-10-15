import { factory } from '../utilities/FetchHelper';
const { booking } = factory;

export async function carriageWithSeats() {
  let seats = booking.findSeats();
  return seats;
}

export async function bookings() {
  let tickets = booking.findBookings();
  return tickets;
}
