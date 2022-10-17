import React from 'react';
import '../../../scss/main.scss';
import { factory } from '../../utilities/FetchHelper';
const { booking } = factory;
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useStates from '../../utilities/useStates';
export default function TicketsPage() {
  let emptyFormValues = {
    bookingId: '',
  };
  const [formValues, updateStateFormValue] = useStates({
    ...emptyFormValues,
  });

  const onChangeFormValue = (event) => {
    let { name, value } = event.target;
    updateStateFormValue({ [name]: value });
  };
  const resetForm = () => {
    updateStateFormValue({ ...emptyFormValues });
  };

  async function submitForm(event) {
    event.preventDefault();
    let finbooking = await booking.findOneBookings(bookingId);
    console.log(finbooking);
    resetForm();
  }

  let { bookingId } = formValues;

  return (
    <div>
      <Form style={{ paddingBottom: '10%', paddingTop: '10%' }}>
        <Form.Group>
          <Form.Control
            type='text'
            name='bookingId'
            placeholder='Bookningsnummer'
            required
            maxLength='100'
            value={bookingId}
            onChange={onChangeFormValue}
          />
        </Form.Group>
      </Form>

      <Button type='submit' className='book-search-btn' onClick={submitForm}>
        Sök
      </Button>
    </div>
  );
}
