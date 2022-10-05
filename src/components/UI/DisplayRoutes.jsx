import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../scss/main.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Train from "./Train";
export default function DisplayRoutes({ props }) {
  let { startStation, endStation, arrivalTimeTo, departureTimeFrom, trainId } =
    props;

  function show(id) {
    setTrain(true);
    setTrainId(id);
  }

  return (
    <div className='wrapper'>
      <div className='route-card'>
        <Container fluid className='bg-secondary text-white mt-2'>
          <Row className='py-3'>
            <Col className='routeSlot'>
              <p>{`${startStation} - ${endStation}`}</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col className='timeSlot'>
              <p>{`${arrivalTimeTo} - ${departureTimeFrom}`}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
