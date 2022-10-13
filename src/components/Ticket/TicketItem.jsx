import React from 'react';
import DisplayRoutes from '../UI/DisplayRoutes';

const TicketItem = ({ routes, date, travelerArray, setTravelerArr }) => {
  return (
    <>
      {routes ? (
        Object.values(routes).map((item, i) => (
          <div key={i}>
            <DisplayRoutes
              key={i}
              props={item}
              date={date}
              travelerArray={travelerArray}
            />
          </div>
        ))
      ) : (
        <p>Station hittades inte</p>
      )}
    </>
  );
};

export default TicketItem;
