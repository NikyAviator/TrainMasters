import React from 'react';
import Form from 'react-bootstrap/Form';

const TicketFrom = (props) => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            type='text'
            name='start'
            placeholder='Enter your departure city'
            required
            maxLength='100'
            value={props.start}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default TicketFrom;
