import React from 'react';
import '../../../scss/main.scss';
import { useState, useEffect } from 'react';
import { carriageWithSeats, tickets } from '../../utilities/Bookings';
import { factory } from '../../utilities/FetchHelper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const { booking } = factory;
export default function Carriage({
  carriage,
  props,
  setCarriage,
  trainId,
  travelerArray,
}) {
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);
  const [image, setImage] = useState('');

  let { timeTableId, arrivalTimeTo, departureTimeFrom, date } = props;

  useEffect(() => {
    setImage('../../../public/images/seat.png');
    async function fetchData() {
      // gets the tickets from database
      let getTickets = await tickets();
      //gets carriagesWithSeats
      let carriages = await carriageWithSeats();

      carriages = carriages.filter(
        (x) => x.carriage === carriage && x.trainId === trainId
      );
      if (getTickets.length) {
        carriages.forEach((x) => {
          x.selected = false;
          getTickets.forEach((e) => {
            if (
              x.seatNumber === e.seatId &&
              x.carriage === e.carriageId &&
              e.timeTableId === timeTableId &&
              e.bdate.slice(0, 10) === date
            ) {
              x.booked = true;
            }
          });
        });
        setSeats(carriages);
      } else {
        setSeats(carriages);
      }
    }
    fetchData();
  }, []);

  async function book() {
    selected.forEach(async (seatNumber) => {
      let book = {
        bookingId: '123',
        arrival: arrivalTimeTo,
        departure: departureTimeFrom,
        price: 22,
        seatId: seatNumber,
        carriageId: carriage,
        timeTableId: timeTableId,
        bdate: date,
      };
      let newBooking = new booking(book);
      await newBooking.save();
    });
  }

  // const uid = () => {
  //   return Date.now().toString(36) + Math.random().toString(36).substr(2);
  // };

  function selectedSeat(id) {
    console.log(travelerArray);
    if (!selected.includes(id) && selected.length < travelerArray.length) {
      let newSelected = [...selected, id];
      setSelected(newSelected);
    } else {
      let newSelected = selected.filter((t) => t !== id);
      setSelected(newSelected);
    }
  }
  return (
    <Container>
      <Row>
        <Col>
          Ni kan välja antal platser: {travelerArray.length - selected.length}
        </Col>
      </Row>
      <Row>
        {seats.map((item, index) => (
          <div
            onClick={() => selectedSeat(item.seatNumber)}
            key={index}
            className={`seat${
              selected.includes(item.seatNumber) ? 'selected' : ''
            }${item.handicapSeat ? 'handicapSeat' : ''}${
              item.booked ? 'booked' : ''
            }`}
            style={{
              backgroundImage: "url('images/seat.png')",
              backgroundSize: '100% 100%',
              width: '50px',
              height: '50px',
              transform: 'rotate(90deg)',
              margin: '22px',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '9px',
              cursor: 'pointer',
              maxHeight: '100px',
            }}
          >
            <p
              className='number'
              style={{
                transform: 'rotate(270deg)',
                marginTop: '15px',
                marginRight: '5px',
              }}
            >
              {' '}
              {item.seatNumber}
            </p>
          </div>
        ))}
      </Row>
      <Button className='secondary' onClick={book}>
        BOKA
      </Button>
      <Button
        className='secondary'
        style={{
          margin: '10px',
        }}
        onClick={() => setCarriage(0)}
      >
        TILLBAKA
      </Button>
    </Container>
  );
}
