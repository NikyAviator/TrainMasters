import React from 'react';
import QRCode from 'react-qr-code';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

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
      <Container style={{ marginTop: "20%", marginBottom: "20%", maxWidth: "70%" }}>
        <Card style={{ border: "none", textAlign: "center", padding: "5%" }}>
          <Col>
            <Row>
              <h1>Bookningsbekräftelse</h1>
            </Row>
            <Row
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 200,
                width: "100%",
              }}
            >
              <QRCode size={256} value={bookingId} viewBox={`0 0 256 256`} />
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
        </Card>
      </Container>
    </>
  );
}
