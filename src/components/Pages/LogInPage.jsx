import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button";

import "../../../scss/main.scss";

export default function LogInPage() {

  return (
    <div className="login">
      <div className="login-container">
        <div className="Heading">
          <h1>Logga in</h1>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Lösenord</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Lösenord"
            />
          </div>
        </form>
        <div className="btn">
          <Button
            type="submit"
            buttonStyle="btn--secondary-outline"
            buttonSize="btn--medium-secondary"
          >
            Logga in
          </Button>
        </div>
        <div className="Register-heading">
          <h3>Har du inget konto?</h3>
          <h5>Registrera dig här.</h5>
        </div>
        <div className="btn">
          <Button
            buttonStyle="btn--secondary-outline"
            buttonSize="btn--medium-secondary"
            link="/registrera"
          >
            Registrera
          </Button>
        </div>
      </div>
    </div>
  );
}
