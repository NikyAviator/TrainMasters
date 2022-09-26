import { useState } from 'react';
import useStates from '../../utilities/useStates';
import '../../../scss/main.scss';
import { findRoute } from '../../utilities/RouteStations';
import DisplayRoutes from '../UI/DisplayRoutes';

export default function BookingPage() {
  const [routes, setRoutes] = useState([]);
  let emptyFormValues = {
    start: 'Lund C',
    end: 'Göteborg C',
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
        <form>
          <input
            className="wish-form-text-field"
            type="text"
            name="start"
            value={start}
            placeholder="Enter start destination"
            required
            maxLength="100"
            onChange={onChangeFormValue}
          />
          <input
            className="wish-form-text-field"
            type="text"
            name="end"
            value={end}
            placeholder="Enter end destination"
            required
            maxLength="100"
            onChange={onChangeFormValue}
          />
          <button type="submit" onClick={submitForm}>
            Sök
          </button>
        </form>

        <>
          {routes ? (
            Object.values(routes).map((item, i) => (
              <DisplayRoutes key={i} props={item} />
            ))
          ) : (
            <p>Station hittades inte</p>
          )}
        </>
      </main>
    </>
  );
}
