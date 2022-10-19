import React from 'react';
import QRCode from 'react-qr-code';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function ConfirmationPage() {
  const location = useLocation();
  let props = location.state;
  let [seats, setSeats] = useState('');

  let { bookingObj, countTravelers, selected } = props;
  let {
    fromDeparture,
    toDestination,
    arrival,
    bdate,
    bookingId,
    carriageId,
    departure,
    price,
    trainId,
    platform,
  } = bookingObj;

  function compareNumbers(a, b) {
    return a - b;
  }

  useEffect(() => {
    console.log(selected.sort((a, b) => a - b));
    setSeats(selected.join());
  }, []);

  return (
    <>
      <Container
        style={{ marginTop: '20%', marginBottom: '20%', maxWidth: '70%' }}
      >
        <Card style={{ border: 'none', textAlign: 'center', padding: '5%' }}>
          <Col>
            <Row>
              <h1>Bokningsbekräftelse</h1>
            </Row>
            <Row
              style={{
                height: 'auto',
                margin: '0 auto',
                maxWidth: 200,
                width: '100%',
              }}
            >
              <QRCode size={256} value={bookingId} viewBox={`0 0 256 256`} />
            </Row>
            <Row style={{ paddingBottom: '5%' }}>
              <h2>{`Bokningsnr: ${bookingId}`}</h2>
            </Row>
            <Row>
              <p>{`${fromDeparture} - ${toDestination}`}</p>
            </Row>
            <Row>
              <p>{`Total pris: ${price}kr`}</p>
            </Row>
            <Row>
              <p>{'Platform: ' + platform}</p>
            </Row>
            <Row>
              <p>{'Avgångstid: ' + departure}</p>
            </Row>
            <Row>
              <p>{'Ankomsttid: ' + arrival}</p>
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
              <p style={{ textDecoration: 'underline' }}>{`Bokade säten:`}</p>
              <p>{seats}</p>
            </Row>
          </Col>
        </Card>
      </Container>
    </>
  );
}
