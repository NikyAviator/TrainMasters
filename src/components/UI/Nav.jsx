import React from "react";
import "../../../scss/main.scss";

function Nav() {
  return (
    <div className="nav-div">
      <div className="navbar-container">
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="images/high-speed-train.png" alt="train-logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">
                    Startsidan
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/boka">
                    Boka
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/biljetter">
                    Biljeter
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/logga-in">
                    Logga in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
