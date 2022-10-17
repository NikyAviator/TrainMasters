import React from 'react';
import '../../../scss/main.scss';
import { factory } from '../../utilities/FetchHelper';
const { booking } = factory;
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useStates from '../../utilities/useStates';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QRCode from 'react-qr-code';
export default function TicketsPage() {
  const [ticket, setTicket] = useState();

  let emptyFormValues = {
    findBookingId: '',
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
    let findbooking = await booking.findOneBookings(findBookingId);
    console.log(findbooking);
    setTicket(...findbooking);
    resetForm();
    console.log(ticket);
  }

  let { findBookingId } = formValues;
  // let {
  //   arrival,
  //   bdate,
  //   bookingId,
  //   carriageId,
  //   departure,
  //   fromDeparture,
  //   price,
  //   seatId,
  //   toDestination,
  // } = ticket;
  return (
    <div className='bookingForm'>
      <Form style={{ paddingBottom: '10%', paddingTop: '10%' }}>
        <Form.Group>
          <Form.Control
            type='text'
            name='findBookingId'
            placeholder='Bokningsnummer'
            required
            maxLength='100'
            value={findBookingId}
            onChange={onChangeFormValue}
          />
        </Form.Group>
      </Form>

      <Button
        type='submit'
        className='book-search-btn'
        onClick={submitForm}
        disabled={!findBookingId}
      >
        Sök
      </Button>

      <Container>
        {ticket ? (
          <Container>
            <Col>
              <Row
                style={{
                  height: 'auto',
                  margin: '0 auto',
                  maxWidth: 64,
                  width: '100%',
                }}
              >
                <QRCode
                  size={256}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  value={ticket.bookingId}
                  viewBox={`0 0 256 256`}
                />
              </Row>
              <Row>
                <h2>{`Bokningsnr: ${ticket.bookingId}`}</h2>
              </Row>
              <Row>
                <p>{`${ticket.fromDeparture} - ${ticket.toDestination}`}</p>
              </Row>
              <Row>
                <p>{`Total pris: ${ticket.price}kr`}</p>
              </Row>
              <Row>
                <p>{`Säten: ${ticket.seatId}`}</p>
              </Row>
            </Col>
          </Container>
        ) : (
          <h4>Hittade ingen bokning</h4>
        )}
      </Container>
    </div>
  );
}
