import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../../scss/StartPage.scss";

export default function StartPage() {
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <h1>Vart vill du åka</h1>
        </div>
        <div className="btn">
          <Link to="/boka">
            <Button buttonStyle="btn--primary" buttonSize="btn--large">
              Boka en Resa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
