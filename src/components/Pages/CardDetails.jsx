import '../../../scss/main.scss';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Train from '../../components/UI/Train';
import Col from 'react-bootstrap/Col';
export default function CardDetails() {
  const location = useLocation();
  let props = location.state;
  let {
    startStation,
    endStation,
    arrivalTimeTo,
    departureTimeFrom,
    trainId,
    Date,
  } = props;

  return (
    <div>
      <div className='details'>
        {
          <Container>
            <Row>
              <Col>
                <h1>{`${startStation} - ${endStation}`}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>{`${arrivalTimeTo} - ${departureTimeFrom}`}</h1>
              </Col>
            </Row>
          </Container>
        }
      </div>
      <Train props={props}></Train>
    </div>
  );
}
