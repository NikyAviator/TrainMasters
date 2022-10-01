import React from 'react';
import DisplayRoutes from '../UI/DisplayRoutes';

const TicketItem = ({ routes }) => {
  return (
    <>
      {routes ? (
        Object.values(routes).map((item, i) => (
          <DisplayRoutes key={i} props={item} />
        ))
      ) : (
        <p>Station hittades inte</p>
      )}
    </>
  );
};

export default TicketItem;
