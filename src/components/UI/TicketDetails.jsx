import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Train from "./Train";
import Col from "react-bootstrap/Col";
export default function TicketDetails({ props }) {
  let { startStation, endStation, arrivalTimeTo, departureTimeFrom, trainId } =
    props;
  return (
    <div className='wrapper'>
      {
        <Container>
          <Row>
            <Col>
              <p>{`${startStation} - ${endStation}`}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{`${arrivalTimeTo} - ${departureTimeFrom}`}</p>
            </Col>
          </Row>
        </Container>
      }
      <Train props={props}></Train>
    </div>
  );
}
