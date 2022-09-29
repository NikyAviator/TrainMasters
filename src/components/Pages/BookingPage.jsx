import { useState } from 'react';
import useStates from '../../utilities/useStates';
import '../../../scss/main.scss';
import { findRoute, itsWeekend } from '../../utilities/RouteStations';
import DisplayRoutes from '../UI/DisplayRoutes';
import DatePicker from '../UI/DatePicker';

export default function BookingPage() {
  const [routes, setRoutes] = useState([]);
  const [weekend, setWeekend] = useState(false);
  let emptyFormValues = {
    start: '',
    end: '',
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
    if (weekend) setRoutes(await itsWeekend(route));
    resetForm();
  }

  let { start, end } = formValues;

  return (
    <>
      <>
        <DatePicker setWeekend={setWeekend} />
      </>
      <main>
        <form>
          <input
            className="wish-form-text-field"
            type="text"
            name="start"
            value={start}
            placeholder="Enter start destination"
            required={true}
            maxLength="100"
            onChange={onChangeFormValue}
          />
          <input
            className="wish-form-text-field"
            type="text"
            name="end"
            value={end}
            placeholder="Enter end destination"
            required={true}
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
