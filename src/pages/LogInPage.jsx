import React from "react";
import { Link } from "react-router-dom";

import "../../scss/LogInPage.scss";

export default function LogInPage() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="Heading">
          <h1>Logga in</h1>
        </div>
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Lösenord
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
        <div className="Register-heading">
          <h3>Har du ingen konto?</h3>
          <h5>Registrera dig här.</h5>
        </div>
        <div className="btn">
          <Link to="/registrera">
            <button>Registrera</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
