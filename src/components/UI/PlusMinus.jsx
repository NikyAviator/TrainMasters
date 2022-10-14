import React from 'react';
import { useState } from 'react';

function PlusMinus({ travelerArray, traveler, setTravelerArr }) {
  let [count, setCount] = useState(0);

  function incrementCount() {
    setCount((c) => c + 1);
    travelerArray.push(traveler);
    setTravelerArr(travelerArray);
    console.log(travelerArray);
    console.log(travelerArray.length);
  }
  function decrementCount() {
    setCount((c) => Math.max(c - 1, 0));
    const index = travelerArray.indexOf(traveler);
    console.log(index);
    if (index > -1) {
      setTravelerArr(travelerArray.splice(index, 1));
      console.log(travelerArray);
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
