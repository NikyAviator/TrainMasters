import { useState } from 'react';
import useStates from '../../utilities/useStates';
import '../../../scss/main.scss';
import { findRoute } from '../../utilities/RouteStations';
import DisplayRoutes from '../UI/DisplayRoutes';
// Börjar importera dem komponenter/ funktioner som behövs för denna sidan:
import TicketItem from '../Ticket/TicketItem';
import TicketFromForm from '../Ticket/TicketFromForm';
import TicketToForm from '../Ticket/TicketToForm';
import { Button, Form } from 'bootstrap';

export default function BookingPage(props) {
  const [routes, setRoutes] = useState([]);
  let emptyFormValues = {
    start: 'Trelleborg',
    end: 'Lund C',
  };
  const [formValues, updateStateFormValue] = useStates({ ...emptyFormValues });
  const onChangeFormValue = (event) => {
    let { name, value } = event.target;
    updateStateFormValue({ [name]: value });
  };
  const resetForm = () => {
    updateStateFormValue({ ...emptyFormValues });
  };

  async function submitForm(event) {
    event.preventDefault();
    let route = await findRoute(start, end);
    setRoutes(route);
  }

  let { start, end } = formValues;

  return (
    <>
      <main>
        <TicketFromForm
          onChangeFormValue={onChangeFormValue}
          value={emptyFormValues}
        />
        <TicketToForm
          onChangeFormValue={onChangeFormValue}
          value={emptyFormValues}
        />
        <Button type='submit' onClick={submitForm}>
          Sök
        </Button>
        {routes ? (
          Object.values(routes).map((item, i) => (
            <DisplayRoutes key={i} props={item} />
          ))
        ) : (
          <p>Station hittades inte</p>
        )}
      </main>
    </>
  );
}
