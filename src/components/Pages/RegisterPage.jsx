import React, { useState } from "react";
import "../../../scss/main.scss";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { send } from "emailjs-com";

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [ConfirmPassWord, setConfirmPassWord] = useState("");
  const [show, setShow] = useState(false);
  const [alreadyExist, setAlreadyExist] = useState(false);
  const [notSamePassword, setPasswordNotSame] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = { firstName, lastName, email, passWord, ConfirmPassWord };
  };

  function checkPassword() {
    if (ConfirmPassWord !== passWord) return true;
    else return false;
  }

  async function createUser() {
    let checkPasswords = checkPassword();
    let object = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      passwor: passWord,
    };
    let doesAccountExist = await (await fetch(`/api/users/${email}`)).json();
    if (doesAccountExist.length > 0) {
      return setAlreadyExist(true);
    } else if (checkPasswords) {
      return setPasswordNotSame(true), setAlreadyExist(false);
    } else {
      await (
        await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(object),
        })
      ).json();
      setShow(true);
      setAlreadyExist(false);
      setPasswordNotSame(false);
      setTimeout(() => {
        setShow(false);
        navigate(`/logga-in`);
      }, 2000);
    }
    let toSend = {
      from_name: "Tågmästarna",
      to_name: `${firstName} ${lastName}`,
      message1: "Här är ditt registrerings bekräftelse.",
      message2: "Tack för att du skapade ett konto hoss oss.",
      email: email,
    };
    sendEmail(toSend);
  }

  const sendEmail = (toSend) => {
    send("service_nrxbesy", "template_ku1bz0i", toSend, "e_1nh-u1LEBDDqIbo")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className="register">
      {show ? (
        ["success"].map((variant, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
            }}
          >
            <Alert key={variant} variant={variant}>
              Registrerad!
            </Alert>
          </div>
        ))
      ) : (
        <></>
      )}
      <div className="register-container">
        <div className="Heading">
          <h1>Registrera</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Förnamn</label>
            <input
              style={{ textAlign: "start" }}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Förnamn"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Efternamn</label>
            <input
              style={{ textAlign: "start" }}
              className="form-control"
              placeholder="Efternamn"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              style={{ textAlign: "start" }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Lösenord</label>
            <input
              style={{ textAlign: "start" }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Lösenord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Bekräfta Lösenord</label>
            <input
              style={{ textAlign: "start" }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Bekräfta Lösenord"
              value={ConfirmPassWord}
              onChange={(e) => setConfirmPassWord(e.target.value)}
              required
            />
            {notSamePassword ? (
              ["danger"].map((variant, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    width: "100%",
                    marginTop: "10%",
                    marginBottom: "10%",
                  }}
                >
                  <Alert key={variant} variant={variant}>
                    Lösenord matchar inte
                  </Alert>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="reg-btn">
            <button className="register-btn" onClick={createUser}>
              Registrera
            </button>
          </div>
          {alreadyExist ? (
            ["danger"].map((variant, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "100%",
                  marginTop: "10%",
                  marginBottom: "10%",
                }}
              >
                <Alert key={variant} variant={variant}>
                  Detta Email finns redan!
                </Alert>
              </div>
            ))
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
}
