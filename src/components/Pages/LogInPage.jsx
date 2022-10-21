import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button';

import '../../../scss/main.scss';

export default function LogInPage({
  loggedIn,
  setLoggedIn,
  setAccount,
  account,
}) {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const login = { email, passWord };
  };
  let navigate = useNavigate();
  async function login() {
    let b = await (await fetch(`/api/users/${email}/${passWord}`)).json();
    setAccount(...b);
    const obj = Object.assign({}, ...b);
    console.log(obj);
    if (Object.keys(b[0]).length === 0) {
      console.log('fel lösenord');
    } else if (Object.keys(b[0]).length >= 1) {
      setLoggedIn(true);
      console.log('loggade in');
      navigate(`/`);
    }
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <div className='Heading'>
          <h1>Logga in</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Email</label>
            <input
              style={{ textAlign: 'start' }}
              type='email'
              class='form-control'
              aria-describedby='emailHelp'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Lösenord</label>
            <input
              style={{ textAlign: 'start' }}
              type='password'
              class='form-control'
              placeholder='Lösenord'
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div className='log-btn'>
            <button className='login-btn' onClick={login}>
              Logga in
            </button>
          </div>
        </form>
        <div className='Register-heading'>
          <h3>Har du inget konto?</h3>
          <h5>Registrera dig här.</h5>
        </div>
        <div>
          <Button
            buttonStyle='btn--secondary-outline'
            buttonSize='btn--medium-secondary'
            link='/registrera'
          >
            Registrera
          </Button>
        </div>
      </div>
    </div>
  );
}
