import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Alert from 'react-bootstrap/Alert';
import '../../../scss/Header.scss';

function Header({ loggedIn, setLoggedIn, account, setAccount }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const [show, setShow] = useState(false);

  useEffect(() => {
    showButton();
  }, []);

  function logOut() {
    setLoggedIn(false);
    setAccount({});
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='images/high-speed-train.png' alt='train-logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <img
              src={click ? '../images/close.png' : '../images/more.png'}
              alt='menu icon'
            />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Startsida
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/boka' className='nav-links' onClick={closeMobileMenu}>
                Boka
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/biljetter'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {loggedIn ? <>Mina Biljetter</> : <>Biljetter</>}
              </Link>
            </li>
            <li className='nav-item'>
              {loggedIn ? (
                <Link className='nav-links-mobile' onClick={closeMobileMenu}>
                  Logga ut: {account.firstName}
                </Link>
              ) : (
                <Link
                  to='/logga-in'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Logga in
                </Link>
              )}
            </li>
          </ul>
          {button && (
            <>
              {loggedIn ? (
                <Button buttonStyle='btn--outline' onClick={logOut}>
                  Logga ut: {account.firstName}
                </Button>
              ) : (
                <Button buttonStyle='btn--outline' link='/logga-in'>
                  Logga in
                </Button>
              )}
            </>
          )}
        </div>
      </nav>
      <div>
        {!loggedIn && show ? (
          ['danger'].map((variant) => (
            <div
              style={{
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                width: '100%',
              }}
            >
              <Alert key={variant} variant={variant}>
                Loggade ut!
              </Alert>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Header;
