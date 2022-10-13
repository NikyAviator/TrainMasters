import React from 'react';
import { useState } from 'react';

function PlusMinus({ travelerArray, traveler }) {
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
    const index = travelerArr.indexOf(props.name);
    if (index > -1) {
      travelerArr.splice(index, 1);
    }

    setTraveler(travelerArr);
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
