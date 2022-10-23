import React from 'react';
import { Button } from '../UI/Button';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';
import '../../../scss/main.scss';
import { useLocation } from 'react-router-dom';
export default function StartPage({ loggedIn }) {
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const { showLoginText } = state || {};
  useEffect(() => {
    if (showLoginText) setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <>
      {loggedIn && show ? (
        ['success'].map((variant, i) => (
          <div
            style={{
              position: 'fixed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              width: '100%',
            }}
            key={i}
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
