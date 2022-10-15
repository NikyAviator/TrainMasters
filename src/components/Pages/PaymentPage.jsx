import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { factory } from '../../utilities/FetchHelper';

const { booking } = factory;

import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
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
  const location = useLocation();
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
    price,
  } = props;

  async function book() {
    selected.forEach(async (seatNumber) => {
      let book = {
        bookingId: '123',
        fromDeparture: startStation,
        toDestination: endStation,
        rorderFrom: rorderFrom,
        rorderTo: rorderTo,
        arrival: arrivalTimeTo,
        departure: departureTimeFrom,
        price: price,
        seatId: seatNumber,
        trainId: trainId,
        carriageId: carriage,
        timeTableId: timeTableId,
        bdate: date,
      };
      let newBooking = new booking(book);
      await newBooking.save();
    });
  }

  return (
    <MDBContainer className='py-5'>
      <MDBRow>
        <MDBCol md='8' className='mb-4'>
          <MDBCard className='mb-4'>
            <MDBCardHeader className='py-3'>
              <h2>
                {startStation} - {endStation}{' '}
              </h2>
              <h5 className='mb-0'>Betalning:</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow className='mb-4'>
                <MDBCol>
                  <MDBInput label='Förnamn' id='form1' type='text' />
                </MDBCol>

                <MDBCol>
                  <MDBInput label='Efternamn' id='form2' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass='mb-4'
                label='Address'
                id='form3'
                type='text'
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Email'
                id='form4'
                type='email'
              />

              <h5 className='mb-4'>Kortuppgifter:</h5>

              <MDBRadio
                name='flexRadioDefault'
                id='flexRadioDefault1'
                label='Kredit kort'
                checked
              />

              <MDBRow>
                <MDBCol>
                  <MDBInput
                    label='Kortinnehavare'
                    id='form6'
                    type='text'
                    wrapperClass='mb-4'
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    label='Kortnummer'
                    id='form7'
                    type='text'
                    wrapperClass='mb-4'
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='3'>
                  <MDBInput
                    label='Utgångsdatum'
                    id='form8'
                    type='text'
                    wrapperClass='mb-4'
                  />
                </MDBCol>
                <MDBCol md='3'>
                  <MDBInput
                    label='CVV'
                    id='form8'
                    type='text'
                    wrapperClass='mb-4'
                  />
                </MDBCol>
              </MDBRow>

              <MDBBtn size='lg' block onClick={book}>
                BETALA
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md='4' className='mb-4'>
          <MDBCard className='mb-4'>
            <MDBCardHeader className='py-3'>
              <h5 className='mb-0'>Din biljett</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
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
