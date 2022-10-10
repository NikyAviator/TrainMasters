import React, { useState } from "react";
import { Button } from "../UI/Button";
import "../../../scss/main.scss";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = { firstName, lastName, email, passWord };
    console.log(register);
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="Heading">
          <h1>Registrera</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Förnamn</label>
            <input
              style={{ textAlign: "start" }}
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Förnamn"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Efternamn</label>
            <input
              style={{ textAlign: "start" }}
              class="form-control"
              placeholder="Efternamn"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              style={{ textAlign: "start" }}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
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
              id="exampleInputPassword1"
              placeholder="Lösenord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Bekräfta Lösenord</label>
            <input
              style={{ textAlign: "start" }}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Bekräfta Lösenord"
            />
          </div>
          <div className="reg-btn">
            <button className="register-btn">Registrera</button>
          </div>
        </form>
      </div>
    </div>
  );
}
