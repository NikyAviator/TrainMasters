import React from 'react';
import '../../../scss/main.scss';
import { useState, useEffect } from 'react';
import { carriageWithSeats, bookings } from '../../utilities/Bookings';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function Carriage({
  carriage,
  props,
  setCarriage,
  trainId,
  travelerArray,
}) {
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState([]);
  const [image, setImage] = useState('../../../public/images/seat.png');
  let {
    timeTableId,
    arrivalTimeTo,
    departureTimeFrom,
    date,
    startStation,
    endStation,
    rorderFrom,
    rorderTo,
    price,
    trainNumber,
  } = props;

  // x är stolarna
  // e är bokningar
  useEffect(() => {
    async function fetchData() {
      // gets all the bookings from database
      let getbookings = await bookings();
      //gets carriagesWithSeats
      let carriages = await carriageWithSeats();

      carriages = carriages.filter(
        (x) => x.carriage === carriage && x.trainId === trainId
      );

      if (getbookings.length) {
        carriages.forEach((x) => {
          x.selected = false;
          getbookings.forEach((e) => {
            if (
              x.seatNumber === e.seatId &&
              x.carriage === e.carriageId &&
              e.timeTableId === timeTableId &&
              e.bdate.slice(0, 10) === date &&
              e.rorderTo > rorderFrom &&
              e.rorderFrom < rorderTo
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

  function selectedSeat(id) {
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
              selected.includes(item.seatNumber) ? "selected" : ""
            }${item.handicapSeat ? "handicapSeat" : ""}${
              item.booked ? "booked" : ""
            }`}
            style={{
              backgroundImage: "url('images/seat.png')",
              backgroundSize: "100% 100%",
              width: "50px",
              height: "50px",
              transform: "rotate(90deg)",
              margin: "22px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "9px",
              cursor: "pointer",
              maxHeight: "100px",
            }}
          >
            <p
              className="number"
              style={{
                transform: "rotate(270deg)",
                marginTop: "15px",
                marginRight: "5px",
              }}
            >
              {" "}
              {item.seatNumber}
            </p>
          </div>
        ))}
      </Row>
      <Button
        className="back-btn"
        style={{
          margin: "10px",
        }}
        onClick={() => setCarriage(0)}
      >
        TILLBAKA
      </Button>

      <Button className="to-payment-btn">
        <Link
          className="to-payment-btn-link"
          to={`/betala`}
          style={{ textDecoration: "none" }}
          state={{
            startStation: startStation,
            endStation: endStation,
            arrivalTimeTo: arrivalTimeTo,
            departureTimeFrom: departureTimeFrom,
            timeTableId: timeTableId,
            trainId: trainId,
            trainNumber: trainNumber,
            date: date,
            travelerArray: travelerArray,
            rorderFrom: rorderFrom,
            rorderTo: rorderTo,
            selected: selected,
            carriage: carriage,
            price: carriage === 1 ? price.firstClass : price.secondClass,
          }}
        >
          BETALA
        </Link>
      </Button>
    </Container>
  );
}
