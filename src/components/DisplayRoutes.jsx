import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../scss/displayRoutes.scss';

export default function DisplayRoutes({ props }) {
  let { startStation, endStation, arrivalTimeTo, departureTimeFrom } = props;

  return (
    <div className="wrapper">
      <div className="route-card">
        <Container fluid className="bg-primary text-white mt-2 ">
          <Row className="py-3">
            <Col className="routeSlot">
              <p>{`${startStation} - ${endStation}`}</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col className="timeSlot">
              <p>{`${arrivalTimeTo} - ${departureTimeFrom}`}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
