import '../../../scss/main.scss';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Train from '../../components/UI/Train';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
export default function CardDetails() {
  const location = useLocation();
  let props = location.state;
  let { startStation, endStation, arrivalTimeTo, departureTimeFrom } = props;

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
                <h1>{`${departureTimeFrom} - ${arrivalTimeTo}`}</h1>
              </Col>
            </Row>
          </Container>
        }
      </div>
      <Train props={props}></Train>
    </div>
  );
}
