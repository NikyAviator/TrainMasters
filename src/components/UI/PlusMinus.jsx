import React from 'react';
import { useState } from 'react';

function PlusMinus({ travelerArray, traveler, setTravelerArr }) {
  let [count, setCount] = useState(0);
  const travelerArr = [];

  function incrementCount() {
    setCount((c) => c + 1);
    travelerArr.push(traveler);
    travelerArray.push(...travelerArr);
    console.log(travelerArray);
  }
  function decrementCount() {
    setCount((c) => Math.max(c - 1, 0));
    const index = travelerArray.indexOf(traveler);
    if (index > -1) {
      travelerArray.splice(index, 1);
    }
  }

  return (
    <div className='content-box'>
      <div className='number'>
        <span onClick={decrementCount} className='minus'>
          -
        </span>
        <input type='text' value={count} onChange={incrementCount} />
        <span onClick={incrementCount} className='plus'>
          +
        </span>
      </div>
    </div>
  );
}

export default PlusMinus;
