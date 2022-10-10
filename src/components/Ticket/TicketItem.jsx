import React from 'react';
import DisplayRoutes from '../UI/DisplayRoutes';

const TicketItem = ({ routes, Date }) => {
  return (
    <>
      {routes ? (
        Object.values(routes).map((item, i) => (
          <div key={i}>
            <DisplayRoutes key={i} props={item} Date={Date} />
          </div>
        ))
      ) : (
        <p>Station hittades inte</p>
      )}
    </>
  );
};

export default TicketItem;
