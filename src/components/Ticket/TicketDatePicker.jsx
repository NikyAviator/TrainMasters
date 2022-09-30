import React from 'react';
import Form from 'react-bootstrap/Form';

const TicketDatePicker = ({ setWeekend }) => {
  function checkweekday(e) {
    let day = new Date(e);
    let getdate = day.getUTCDay();
    console.log(getdate);
    if (getdate === 0 || getdate === 6) setWeekend(true);
    else {
      setWeekend(false);
    }
  }

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            type="date"
            name="duedate"
            placeholder="Choose date of your departure"
            min="2022-01-01"
            onChange={(e) => checkweekday(e.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
};
export default TicketDatePicker;
