import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../scss/main.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { count, countCapacity } from '../../utilities/PriceCounter';
export default function DisplayRoutes({ props, date, travelerArray }) {
  const [price, setPrice] = useState(0);

  let {
    startStation,
    endStation,
    arrivalTimeTo,
    departureTimeFrom,
    trainId,
    timeTableId,
    rorderFrom,
    rorderTo,
    arrivalTime,
    direction,
    departureTime,
    trainNumber,
    platformFrom: platformFrom,
    platformTo: platformTo,
  } = props;

  useEffect(() => {
    async function countPrice() {
      let price = count(arrivalTime, departureTime, travelerArray, trainId);
      setPrice(await countCapacity(price, trainId, timeTableId, date));
    }
    countPrice();
  }, [props]);

  return (
    <div className='wrapper'>
      <div className='route-card'>
        <Link
          to={`/details`}
          style={{ textDecoration: 'none' }}
          state={{
            startStation: startStation,
            endStation: endStation,
            arrivalTimeTo: arrivalTimeTo,
            departureTimeFrom: departureTimeFrom,
            timeTableId: timeTableId,
            trainId: trainId,
            trainNumber: trainNumber,
            direction: direction,
            date: date,
            travelerArray: travelerArray,
            rorderFrom: rorderFrom,
            rorderTo: rorderTo,
            price: price,
            platformFrom: platformFrom,
            platformTo: platformTo,
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
                <p>{`${departureTimeFrom} - ${arrivalTimeTo}`}</p>
              </Col>
            </Row>
            <Row className='py-3'>
              <Col className='timeSlot'>
                <p>{`Fr. ${price.secondClass} kr`}</p>
              </Col>
            </Row>
          </Container>
        </Link>
      </div>
    </div>
  );
}
