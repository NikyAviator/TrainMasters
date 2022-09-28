import React from 'react';
import Form from 'react-bootstrap/Form';

const TicketTo = (props) => {
  return (
    <>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            name='end'
            placeholder='Enter your departure city'
            required
            maxLength='100'
            value={props.end}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default TicketTo;
