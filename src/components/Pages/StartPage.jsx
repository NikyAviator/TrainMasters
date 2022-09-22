import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import '../../scss/StartPage.scss';

export default function StartPage() {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='text'>
          <h1>Vart vill du åka</h1>
        </div>
        <div className='btn'>
          <Button
            buttonStyle='btn--outline'
            link='/boka'
            buttonSize='btn--extra-large'
          >
            Boka en Resa
          </Button>
        </div>
      </div>
    </div>
  );
}
