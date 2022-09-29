import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const TicketDatePicker = (props) => {
  const [enteredDate, setEnteredDate] = useState('');

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            type='date'
            name='start'
            placeholder='Choose date of your departure'
            min='2022-01-01'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default TicketDatePicker;
