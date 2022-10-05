import React from 'react';
import { useState } from 'react';
const PlusMinus = () => {
  let [count, setCount] = useState(0);

  function incrementCount() {
    setCount((c) => c + 1);
  }
  function decrementCount() {
    setCount((c) => Math.max(c - 1, 0));
  }

  return (
    <div className='content-box'>
      <div className='number'>
        <span onClick={decrementCount} className='minus'>
          -
        </span>
        <input type='text' value={count} />
        <span onClick={incrementCount} className='plus'>
          +
        </span>
      </div>
    </div>
  );
};

export default PlusMinus;
