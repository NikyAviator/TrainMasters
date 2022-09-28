import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TicketToForm = (props) => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>End</Form.Label>
        <Form.Control
          value={start}
          type='text'
          placeholder='Enter start dest'
          onChange={onChangeFormValue}
        />
      </Form.Group>
    </Form>
  );
};

export default TicketToForm;
