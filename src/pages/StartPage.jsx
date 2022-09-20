import React from "react";
import { Link } from "react-router-dom";
import '../../scss/StartPage.scss';

export default function StartPage() {
  return (
    <div className="home">
      <div className="text">
        <h1>Vart vill du åka</h1>
      </div>
      <div className="btn">
        <Link to="/booking">
          <button>Boka en Resa</button>
        </Link>
      </div>
    </div>
  );
}
