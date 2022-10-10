import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../scss/main.scss';
import { Link } from 'react-router-dom';
export default function DisplayRoutes({ props, Date }) {
  let {
    startStation,
    endStation,
    arrivalTimeTo,
    departureTimeFrom,
    trainId,
    timeTableId,
  } = props;

  return (
    <div className='wrapper'>
      <div className='route-card'>
        <Link
          to='/details'
          style={{ textDecoration: 'none' }}
          state={{
            startStation: startStation,
            endStation: endStation,
            arrivalTimeTo: arrivalTimeTo,
            departureTimeFrom: departureTimeFrom,
            timeTableId: timeTableId,
            trainId: trainId,
            Date: Date,
          }}
        >
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
        </Link>
      </div>
    </div>
  );
}
