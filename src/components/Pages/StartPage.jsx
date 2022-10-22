import React from 'react';
import { Button } from '../UI/Button';
import Alert from 'react-bootstrap/Alert';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../../scss/main.scss';

export default function StartPage({ loggedIn }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 3000);
  }, []);

  return (
    <>
      {loggedIn && show ? (
        ['success'].map((variant) => (
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              width: '100%',
            }}
          >
            <Alert key={variant} variant={variant}>
              Loggade in!
            </Alert>
          </div>
        ))
      ) : (
        <></>
      )}

      <div className='hero-container'>
        <h1>Tågmästarna</h1>
        <p>Vart vill du resa?</p>
        <div className='hero-btn'>
          <Button
            className='travel-btn'
            buttonStyle='btn--primary'
            buttonSize='btn--extra-large'
            link='/boka'
          >
            Sök resa
          </Button>
        </div>
        <></>
      </div>
    </>
  );
}
