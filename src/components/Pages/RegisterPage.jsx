import React from 'react';
import { Button } from '../UI/Button';
import '../../../scss/main.scss';

export default function RegisterPage() {
  const inputStyle = {
    padding: '3%',
    marginTop: '5%',
    marginBottom: '10%',
  };

  return (
    <div className='register'>
      <div className='register-container'>
        <div className='Heading'>
          <h1>Registrera</h1>
        </div>
        <form>
          <div class='form-group row'>
            <label for='staticEmail' class='col-sm-2 col-form-label'>
              Förnamn
            </label>
            <div class='col-sm-10'>
              <input
                style={inputStyle}
                type='text'
                readonly
                class='form-control-plaintext'
                id='staticEmail'
                placeholder='Förnamn'
              />
            </div>
          </div>
          <div class='form-group row'>
            <label for='staticEmail' class='col-sm-2 col-form-label'>
              Efternamn
            </label>
            <div class='col-sm-10'>
              <input
                style={inputStyle}
                type='text'
                readonly
                class='form-control-plaintext'
                id='staticEmail'
                placeholder='Efternamn'
              />
            </div>
          </div>
          <div class='form-group row'>
            <label for='staticEmail' class='col-sm-2 col-form-label'>
              Email
            </label>
            <div class='col-sm-10'>
              <input
                style={inputStyle}
                type='text'
                readonly
                class='form-control-plaintext'
                id='staticEmail'
                placeholder='Email'
              />
            </div>
          </div>
          <div class='form-group row'>
            <label for='inputPassword' class='col-sm-2 col-form-label'>
              Lösenord
            </label>
            <div class='col-sm-10'>
              <input
                style={inputStyle}
                type='password'
                class='form-control'
                id='inputPassword'
                placeholder='Lösenord'
              />
            </div>
          </div>
          <div class='form-group row'>
            <label for='inputPassword' class='col-sm-2 col-form-label'>
              Bekräfta Lösenord
            </label>
            <div class='col-sm-10'>
              <input
                style={inputStyle}
                type='password'
                class='form-control'
                id='inputPassword'
                placeholder='Bekräfta Lösenord'
              />
            </div>
          </div>
        </form>
        <div>
          <Button
            buttonStyle='btn--secondary-outline'
            buttonSize='btn--medium-secondary'
          >
            Skapa konto
          </Button>
        </div>
      </div>
    </div>
  );
}
