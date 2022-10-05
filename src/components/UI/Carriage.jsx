import React from "react";
import "../../../scss/main.scss";
import { useState } from "react";
import { useEffect } from "react";
import { carriageWithSeats, tickets } from "../../utilities/RouteStations";
import { factory } from "../../utilities/FetchHelper";
const { ticket } = factory;
export default function Carriage({ carriage, props }) {
  const [routes, setRoutes] = useState([]);
  const [selected, setSelected] = useState({});
  let { timeTableId, arrivalTimeTo, departureTimeFrom } = props;

  useEffect(() => {
    async function fetchData() {
      let b = await tickets();
      let a = await carriageWithSeats();
      a = a.filter((x) => x.carriagesId === carriage);
      if (b.length) {
        a.forEach((x) => {
          b.forEach((e) => {
            if (
              x.seatNumber === e.seatId &&
              x.carriagesId === e.carriageId &&
              e.timeTableId === timeTableId
            ) {
              x.booked = true;
            }
          });
        });
        setRoutes(a);
      } else {
        setRoutes(a);
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
      bdate: "2022/01/01",
    };
    let newBooking = new ticket(test);
    await newBooking.save();
  }

  function k(t) {
    setSelected(t);
  }

  return (
    <div className='wrapper'>
      <div>
        {routes.map((item, i) => (
          <div
            className='test'
            style={{
              backgroundColor: item.booked ? "gray" : "green",
              width: selected === item.seatNumber ? "30px" : "20px",
            }}
            key={i}
            onClick={() => k(item.seatNumber)}
          >
            {item.seatNumber}
          </div>
        ))}
      </div>
      <button onClick={book}>BOKA</button>
    </div>
  );
}
