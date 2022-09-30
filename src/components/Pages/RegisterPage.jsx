import React from 'react';
import { Button } from '../UI/Button';
import '../../../scss/main.scss';

export default function RegisterPage() {

  return (
    <div className="register">
      <div className="register-container">
        <div className="Heading">
          <h1>Registrera</h1>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Förnamn</label>
            <input
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Förnamn"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Efternamn</label>
            <input class="form-control" placeholder="Efternamn" />
          </div>
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
          <div class="form-group">
            <label for="exampleInputPassword1">Bekräfta Lösenord</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Bekräfta Lösenord"
            />
          </div>
        </form>
        <div>
          <Button
            buttonStyle="btn--secondary-outline"
            buttonSize="btn--medium-secondary"
          >
            Skapa konto
          </Button>
        </div>
      </div>
    </div>
  );
}
