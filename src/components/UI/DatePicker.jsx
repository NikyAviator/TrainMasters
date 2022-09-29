import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export default function DatePicker({ setWeekend }) {
  function checkweekday(e) {
    let day = new Date(e);
    let getdate = day.getUTCDay();
    if (getdate === 0 || getdate === 6) setWeekend(true);
    else {
      setWeekend(false);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Form.Group controlId="duedate">
            <Form.Control
              type="date"
              name="duedate"
              required={true}
              placeholder="Due date"
              onChange={(e) => checkweekday(e.target.value)}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
}
