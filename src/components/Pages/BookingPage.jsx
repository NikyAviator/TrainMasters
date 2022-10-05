import "../../../scss/main.scss";
import TicketFromTo from "../Ticket/TicketFromTo";

export default function BookingPage(props) {
  let { setTrainId, trainIdd } = props;
  return (
    <div>
      <TicketFromTo trainIdd={trainIdd} setTrainId={setTrainId} />
    </div>
  );
}
