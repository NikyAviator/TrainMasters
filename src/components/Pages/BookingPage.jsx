import { useState, useEffect } from 'react';
import useStates from '../../utilities/useStates';
import { factory } from '../../utilities/FetchHelper';
import '../../../scss/main.scss';
export default function BookingPage() {
  let emptyFormValues = {
    start: '',
    end: '',
  };
  const [formValues, updateStateFormValue] = useStates({ ...emptyFormValues });
  const [route, updateroute] = useState('');
  const [arrivalDeparture, setarrivalDeparture] = useState([]);
  const [backendData, setBackendData] = useState([]);

  const onChangeFormValue = (event) => {
    let { name, value } = event.target;
    // Update the state variable formValues
    // name="itemDescription"
    updateStateFormValue({ [name]: value });
  };
  const resetForm = () => {
    updateStateFormValue({ ...emptyFormValues });
  };

  function submitForm(event) {
    event.preventDefault();
    let start = test(formValues.start);
    let end = test(formValues.end);
    if (!start || !end) {
      alert('Station not found');
    } else {
      updateroute(start.routeName);
      let timeDeparture = getTime(start.startTime, start.arrivalTime);
      let timeArrival = getTime(end.startTime, end.arrivalTime);
      const results = {
        start: start.stationName,
        end: end.stationName,
        timeDeparture: timeDeparture,
        timeArrival: timeArrival,
      };
      setarrivalDeparture(results);
      console.log(arrivalDeparture);
      resetForm();
    }
  }
  function getTime(time, addHour) {
    // create proper date with the string
    var date = new Date('2022-01-01T' + time);
    // add 10 minutes
    var newDate = new Date(date.getTime() + addHour * 60000);
    // split the new string
    var newDateSplit = newDate.toTimeString().split(':');
    // get hour and minutes from split date
    var newTimeString = newDateSplit[0] + ':' + newDateSplit[1];

    return newTimeString;
  }

  const { routeWithStation } = factory;

  useEffect(() => {
    async function fetchData() {
      setBackendData(await routeWithStation.find());
    }
    console.log(backendData);
    fetchData();
  }, []);

  function test(string) {
    let c = backendData.find((x) => x.stationName === string);
    return c;
  }

  let { start, end } = formValues;

  return (
    <>
      {/* <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </Router> */}
      <main>
        {/* <div>
        {backendData.map((station) => (
          <div key={station.orders}>{station.routeName}</div>
        ))}
      </div> */}

        <form>
          <input
            className='wish-form-text-field'
            type='text'
            name='start'
            value={start}
            placeholder='Enter start destination'
            required
            maxLength='100'
            onChange={onChangeFormValue}
          />
          <input
            className='wish-form-text-field'
            type='text'
            name='end'
            value={end}
            placeholder='Enter end destination'
            required
            maxLength='100'
            onChange={onChangeFormValue}
          />
          <button type='submit' onClick={submitForm}>
            Submit
          </button>
        </form>
        <div>{arrivalDeparture.start}</div>
        <div>{arrivalDeparture.timeDeparture}</div>
        <div>{arrivalDeparture.end}</div>
        <div>{arrivalDeparture.timeArrival}</div>
      </main>
    </>
  );
}
