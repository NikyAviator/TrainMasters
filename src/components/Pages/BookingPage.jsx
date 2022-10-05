import "../../../scss/main.scss";
import TicketFromTo from "../Ticket/TicketFromTo";
import TicketTravelers from "../Ticket/TicketTravelers";

export default function BookingPage(props) {
  let { setTrainId, trainIdd } = props;
  return (
    <div>
      <TicketFromTo trainIdd={trainIdd} setTrainId={setTrainId} />
      <TicketTravelers />
    </div>
  );
}
