import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button";
import "../../../scss/main.scss";

export default function StartPage() {
  return (
    <div className="hero-container">
      <h1>Tågmästarna</h1>
      <p>Vart vill du resa?</p>
      <div className="hero-btn">
        <Button
          className="travel-btn"
          buttonStyle="btn--outline"
          buttonSize="btn--extra-large"
          link="/boka"
        >
          Sök resa
        </Button>
      </div>
    </div>
  );
}
