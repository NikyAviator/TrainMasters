import '../../../scss/main.scss';
import TicketFromTo from '../Ticket/TicketFromTo';
import TicketTravelers from '../Ticket/TicketTravelers';
import { Button } from '../UI/Button';

export default function BookingPage(props) {
  return (
    <div className="bookingForm">
      <TicketFromTo />
    </div>
  );
}
