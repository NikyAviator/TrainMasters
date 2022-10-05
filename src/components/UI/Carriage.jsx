import React from 'react';
import '../../../scss/main.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { carriageWithSeats, tickets } from '../../utilities/RouteStations';
import { factory } from '../../utilities/FetchHelper';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
const { ticket } = factory;
export default function Carriage({ carriage, props }) {
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState({});
  let { timeTableId, arrivalTimeTo, departureTimeFrom } = props;

  useEffect(() => {
    async function fetchData() {
      // gets the tickets from database
      let getTickets = await tickets();
      //gets carriagesWithSeats
      let carriages = await carriageWithSeats();
      carriages = carriages.filter((x) => x.carriagesId === carriage);
      if (getTickets.length) {
        carriages.forEach((x) => {
          getTickets.forEach((e) => {
            if (
              x.seatNumber === e.seatId &&
              x.carriagesId === e.carriageId &&
              e.timeTableId === timeTableId
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
    let test = {
      arrival: arrivalTimeTo,
      departure: departureTimeFrom,
      price: 22,
      bookingId: 1,
      seatId: selected,
      carriageId: carriage,
      timeTableId: timeTableId,
      bdate: '2022/01/01',
    };
    let newBooking = new ticket(test);
    await newBooking.save();
  }

  function selectedSeat(seat) {
    setSelected(seat);
  }

  return (
    <Container>
      <Row>
        {seats.map((item, i) => (
          <Col
            className='test'
            style={{
              backgroundColor: item.booked ? 'gray' : 'green',
            }}
            key={i}
            onClick={() => selectedSeat(item.seatNumber)}
          >
            {item.seatNumber}
          </Col>
        ))}
      </Row>
      <Button className='secondary' onClick={book}>
        BOKA
      </Button>
    </Container>
  );
}
