import React from 'react';
import '../../../scss/main.scss';
import { factory } from '../../utilities/FetchHelper';
const { booking } = factory;
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useStates from '../../utilities/useStates';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import QRCode from 'react-qr-code';

export default function TicketsPage() {
  const [ticket, setTicket] = useState();
  let [ticketSeatsInfo, setticketSeatsInfo] = useState({});
  let [countTravelers, setcountTravelers] = useState({});
  let [seats, setSeats] = useState('');
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
    Object.keys(ticketSeatsInfo).forEach((key) => delete ticketSeatsInfo[key]);
    let getSeats = [];
    let type = [];
    event.preventDefault();
    let findbooking = await booking.findOneBookings(findBookingId);
    findbooking.forEach((x) => {
      getSeats.push(x.seatId);
      type.push(x.typeOfSeat);
    });
    setTicket(...findbooking);
    getSeats.forEach((key, i) => (ticketSeatsInfo[key] = type[i]));
    let adults = 0;
    let child = 0;
    let senior = 0;
    let student = 0;
    let youth = 0;
    for (const seat in ticketSeatsInfo) {
      if (ticketSeatsInfo[seat] === 'Vuxen') adults++;
      if (ticketSeatsInfo[seat] === 'Barn') child++;
      if (ticketSeatsInfo[seat] === 'Pensionär') senior++;
      if (ticketSeatsInfo[seat] === 'Student') student++;
      if (ticketSeatsInfo[seat] === 'Ungdom') youth++;
    }
    let count = {
      Vuxen: adults,
      Barn: child,
      Pensionär: senior,
      Student: student,
      Ungdom: youth,
    };
    setcountTravelers(count);
    setSeats(getSeats.join());
    setticketSeatsInfo(ticketSeatsInfo);
  }

  console.log(ticket);

  let { findBookingId } = formValues;

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
        className='book-search-btn mb-6'
        onClick={submitForm}
        disabled={!findBookingId}
      >
        Sök
      </Button>

      <Container>
        {ticket ? (
          <Container>
            <Card
              style={{ border: 'none', textAlign: 'center', padding: '5%' }}
            >
              <Col>
                <Row
                  style={{
                    height: 'auto',
                    margin: '0 auto',
                    maxWidth: 200,
                    width: '100%',
                    paddingBottom: '3%',
                  }}
                >
                  <QRCode
                    size={256}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    value={ticket.bookingId}
                    viewBox={`0 0 256 256`}
                  />
                </Row>
                <Row style={{ paddingBottom: '5%' }}>
                  <h2>{`Bokningsnr: ${ticket.bookingId}`}</h2>
                </Row>
                <Row>
                  <p>{`${ticket.fromDeparture} - ${ticket.toDestination}`}</p>
                </Row>
                <Row>
                  <p>{`Total pris: ${ticket.price}kr`}</p>
                </Row>
                <Row>
                  <p>{`Platform: ${ticket.platform}`}</p>
                </Row>
                <Row>
                  <p>{`Avgångstid: ${ticket.departure}`}</p>
                </Row>
                <Row>
                  <p>{`Ankomsttid: ${ticket.arrival}`}</p>
                </Row>
                <Row>
                  <p
                    style={{ textDecoration: 'underline' }}
                  >{`Bokade resenärer:`}</p>
                  {Object.entries(countTravelers).map(([key, value], i) => (
                    <div>{value ? `${value}x ${key}` : ''}</div>
                  ))}
                </Row>
                <Row style={{ paddingTop: '4%' }}>
                  <p
                    style={{ textDecoration: 'underline' }}
                  >{`Bokade säten:`}</p>
                  <p>{seats}</p>
                </Row>
              </Col>
            </Card>
          </Container>
        ) : (
          <h4>Hittade ingen bokning</h4>
        )}
      </Container>
    </div>
  );
}
