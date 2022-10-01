import '../../../scss/main.scss';
import TicketFromTo from '../Ticket/TicketFromTo';
import TicketTravelers from '../Ticket/TicketTravelers';

export default function BookingPage() {
  return (
    <div>
      <TicketFromTo />
      <TicketTravelers />
    </div>
  );
}
