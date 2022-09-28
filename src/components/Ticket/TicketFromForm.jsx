import React from 'react';
import { Button, Form } from 'bootstrap';
const TicketFromForm = (props) => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Start</Form.Label>
        <Form.Control
          value={end}
          type='text'
          placeholder='Enter start dest'
          onChange={onChangeFormValue}
        />
      </Form.Group>
    </Form>
  );
};

export default TicketFromForm;
