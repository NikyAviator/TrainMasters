import React from 'react';
import DisplayRoutes from '../UI/DisplayRoutes';
import { useState } from 'react';

const TicketItem = ({ routes, Date }) => {
  return (
    <>
      {routes ? (
        Object.values(routes).map((item, i) => (
          <div>
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
