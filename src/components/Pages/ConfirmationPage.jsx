import React from 'react';
import QRCode from 'react-qr-code';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ConfirmationPage() {
  const location = useLocation();
  let props = location.state;
  let { bookingObj } = props;
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
  } = bookingObj;

  console.log(props);

  return (
    <>
      <Container>
        <Col>
          <Row>
            <h1>Bookningsbekräftelse</h1>
          </Row>
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
              value={bookingId}
              viewBox={`0 0 256 256`}
            />
          </Row>
          <Row>
            <h2>{`Bokningsnr: ${bookingId}`}</h2>
          </Row>
          <Row>
            <p>{`${fromDeparture} - ${toDestination}`}</p>
          </Row>
          <Row>
            <p>{`Total pris: ${price}kr`}</p>
          </Row>
        </Col>
      </Container>
    </>
  );
}
