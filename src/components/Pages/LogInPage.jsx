import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button";

import "../../../scss/main.scss";

export default function LogInPage() {

  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = { email, passWord };
    console.log(login);  
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="Heading">
          <h1>Logga in</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              style={{ textAlign: "start" }}
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Lösenord</label>
            <input
              style={{ textAlign: "start" }}
              type="password"
              class="form-control"
              placeholder="Lösenord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
        </form>
        <div className="btn">
          <Button
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
