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
            <button className="home-book-btn">Boka en resa</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
