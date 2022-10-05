import React from "react";
import DisplayRoutes from "../UI/DisplayRoutes";
import { useState } from "react";
import TicketDetails from "../UI/TicketDetails";

const TicketItem = ({ routes }) => {
  const [train, setTrain] = useState(false);
  const [info, setInfo] = useState([]);
  function show(item) {
    setInfo(item);
    setTrain(true);
  }
  return (
    <>
      {train ? (
        <TicketDetails props={info} />
      ) : (
        <>
          {routes ? (
            Object.values(routes).map((item, i) => (
              <div onClick={() => show(item)}>
                <DisplayRoutes key={i} props={item} />
              </div>
            ))
          ) : (
            <p>Station hittades inte</p>
          )}
        </>
      )}{" "}
    </>
  );
};

export default TicketItem;
