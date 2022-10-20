import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { factory } from '../../utilities/FetchHelper';
import { v4 as uuidv4 } from 'uuid';
import { send } from 'emailjs-com';

const { booking } = factory;
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

export default function PaymentPage() {
  const [paymentEmail, setPaymentEmail] = useState("");
  let [ticketSeatsInfo, setticketSeatsInfo] = useState({});
  let [countTravelers, setcountTravelers] = useState({});
  const navigate = useNavigate();
  let bookingnumber = uuidv4();
  const location = useLocation();
  let bookingObj = {};
  let props = location.state;
  let {
    startStation,
    endStation,
    arrivalTimeTo,
    departureTimeFrom,
    date,
    trainId,
    rorderFrom,
    rorderTo,
    selected,
    carriage,
    timeTableId,
    travelerArray,
    price,
    firstClass,
    platformFrom,
    platformTo,
    trainNumber,
  } = props;
  useEffect(() => {
    selected.forEach((key, i) => (ticketSeatsInfo[key] = travelerArray[i]));

    let adults = 0;
    let child = 0;
    let senior = 0;
    let student = 0;
    let youth = 0;
    for (const seat in ticketSeatsInfo) {
      if (ticketSeatsInfo[seat] === 'Vuxen') adults++;
      if (ticketSeatsInfo[seat] === 'Barn') child++;
      if (ticketSeatsInfo[seat] === 'Pensionär') senior++;
      if (ticketSeatsInfo[seat] === 'Student') student++;
      if (ticketSeatsInfo[seat] === 'Ungdom') youth++;
    }
    let count = {
      Vuxen: adults,
      Barn: child,
      Pensionär: senior,
      Student: student,
      Ungdom: youth,
    };
    setcountTravelers(count);
  }, []);

  async function book() {
    for (const seat in ticketSeatsInfo) {
      bookingObj = {
        bookingId: bookingnumber.split('-').shift(),
        fromDeparture: startStation,
        toDestination: endStation,
        rorderFrom: rorderFrom,
        rorderTo: rorderTo,
        arrival: arrivalTimeTo,
        departure: departureTimeFrom,
        price: price,
        seatId: seat,
        trainId: trainId,
        carriageId: carriage,
        timeTableId: timeTableId,
        bdate: date,
        typeOfSeat: ticketSeatsInfo[seat],
        platformFrom: platformFrom,
        platformTo: platformTo,
        trainNumber: trainNumber,
      };
      let newBooking = new booking(bookingObj);
      await newBooking.save();

      sendEmail();
      navigate(`/bekraftelse`, {
        state: {
          bookingObj: bookingObj,
          countTravelers: countTravelers,
          selected: selected,
        },
      });
    }
  }

  const [toSend, setToSend] = useState({
    from_name: 'Tågmästarna',
    to_name: 'Kära kund',
    booking_number: bookingnumber.split('-').shift(),
    start_station: startStation,
    end_station: endStation,
    date: date,
    train_id: trainId,
    arrival_time: arrivalTimeTo,
    departure_time: departureTimeFrom,
    platform_from: platformFrom,
    email: paymentEmail,
  });

  const sendEmail = () => {
    send('service_nrxbesy', 'template_brqt2i6', toSend, 'e_1nh-u1LEBDDqIbo')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h2>
                {startStation} - {endStation}{" "}
              </h2>
              <h5 className="mb-0">Betalning:</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput label="Förnamn" id="form1" type="text" />
                </MDBCol>

                <MDBCol>
                  <MDBInput label="Efternamn" id="form2" type="text" />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Address"
                id="form3"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form4"
                type="email"
                value={paymentEmail}
                onChange={(e) => setPaymentEmail(e.target.value)}
              />

              <h5 className="mb-4">Kortuppgifter:</h5>

              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Kredit kort"
                onChange={() => console.log("")}
                checked
              />

              <MDBRow>
                <MDBCol>
                  <MDBInput
                    label="Kortinnehavare"
                    id="form6"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    label="Kortnummer"
                    id="form7"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="3">
                  <MDBInput
                    label="Utgångsdatum"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput
                    label="CVV"
                    id="form8"
                    type="text"
                    wrapperClass="mb-4"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn
                className="pay-btn"
                size="lg"
                block
                onClick={async () => await book()}
              >
                BETALA
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Din biljett</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    {firstClass ? <p>{`1:a klass`}</p> : <p>{`2:a klass`}</p>}
                  </div>
                </MDBListGroupItem>
                {Object.entries(countTravelers).map(([key, value], i) => (
                  <span>{value ? `${value}x ${key}` : ""}</span>
                ))}
                <hr />
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total pris</strong>
                  </div>
                  <span>
                    <strong>{price} kr</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
