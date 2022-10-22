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

export default function TicketsPage({ loggedIn, account }) {
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

  async function searchTicket() {
    Object.keys(ticketSeatsInfo).forEach((key) => delete ticketSeatsInfo[key]);
    let getSeats = [];
    let type = [];
    let findbooking = await booking.findOneBookings(findBookingId);
    setTicket(findbooking);
  }

  useEffect(() => {
    async function fetchData() {
      if (loggedIn) {
        let b = await (
          await fetch(`/api/bookings/userId/${account.id}`)
        ).json();

        setTicket(b);
      }
    }
    fetchData();
  }, []);

  let { findBookingId } = formValues;

  return (
    <div className='bookingForm'>
      {!loggedIn ? (
        <>
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
            onClick={searchTicket}
            disabled={!findBookingId}
          >
            Sök
          </Button>
        </>
      ) : (
        <h1>Mina Biljetter</h1>
      )}

      <Container>
        {ticket && ticket.length >= 0 ? (
          <Container
            style={{
              marginTop: '10%',
              marginBottom: '20%',
              maxWidth: '90%',
            }}
          >
            {ticket.map((x) => (
              <Card
                style={{
                  border: 'none',
                  textAlign: 'center',
                  padding: '5%',
                  width: '100%',
                  marginBottom: '10%',
                }}
              >
                <Col>
                  <Row
                    style={{
                      height: 'auto',
                      margin: '0 auto',
                      maxWidth: 200,
                      width: '100%',
                    }}
                  >
                    <QRCode
                      size={256}
                      value={x.bookingId}
                      viewBox={`0 0 256 256`}
                    />
                  </Row>
                  <Row style={{ paddingBottom: '3%' }}>
                    <h2>{`Bokningsnr: ${x.bookingId}`}</h2>
                  </Row>
                  <Row style={{ paddingBottom: '3%' }}>
                    <h3>{`${x.fromDeparture} - ${x.toDestination}`}</h3>
                  </Row>
                  <Row>
                    {' '}
                    <p>{`Datum: ${x.bdate}`}</p>
                  </Row>
                  <Row>
                    {' '}
                    <p>{`Tåg: 100${x.trainId}`}</p>
                  </Row>

                  <Row>
                    <strong>{`${x.fromDeparture}`}</strong>
                  </Row>
                  <Row>
                    <p>{'Avgångstid: ' + x.departure}</p>
                  </Row>
                  <Row>
                    <p>{'Platform: ' + x.platformFrom}</p>
                  </Row>
                  <Row>
                    <strong>{`${x.toDestination}`}</strong>
                  </Row>
                  <Row>
                    <p>{'Ankomsttid: ' + x.arrival}</p>
                  </Row>
                  <Row>
                    <p>{'Platform: ' + x.platformTo}</p>
                  </Row>

                  <Row>
                    <p
                      style={{ textDecoration: 'underline' }}
                    >{`Type av Biljett:`}</p>
                    <p>{x.typeOfSeat}</p>
                  </Row>
                  <Row>
                    <p style={{ textDecoration: 'underline' }}>{`Säte:`}</p>
                    <p>Nr: {x.seatId}</p>
                    <p>{`Vagn: ${x.carriageId}`}</p>
                  </Row>
                  <Row>
                    <strong>{`Pris: ${x.price}kr`}</strong>
                  </Row>
                </Col>
              </Card>
            ))}
          </Container>
        ) : (
          ''
        )}
      </Container>
    </div>
  );
}
