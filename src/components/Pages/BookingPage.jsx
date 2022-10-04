import '../../../scss/main.scss';
import TicketFromTo from '../Ticket/TicketFromTo';
import TicketTravelers from '../Ticket/TicketTravelers';
import { Button } from '../UI/Button';

export default function BookingPage(props) {
  return (
    <div>
      <TicketFromTo />
      <TicketTravelers />
      <Button
        className='bookingSearch'
        buttonStyle='btn--secondary-outline'
        buttonSize='btn--medium-secondary'
        onClick={props.submitForm}
      >
        Sök
      </Button>
    </div>
  );
}
