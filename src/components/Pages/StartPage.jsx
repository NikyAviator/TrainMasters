import React from 'react';
import { Button } from '../UI/Button';
import { Link, useLocation } from 'react-router-dom';
import '../../../scss/main.scss';

export default function StartPage() {
  const location = useLocation();
  let props = location.state;
  console.log(props);
  return (
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
    </div>
  );
}
