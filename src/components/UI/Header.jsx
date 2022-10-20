import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import '../../../scss/Header.scss';

function Header({ loggedIn }) {
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

  useEffect(() => {
    showButton();
  }, []);

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
                Biljetter
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/logga-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Logga in
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle='btn--outline' link='/logga-in'>
              {loggedIn ? <>Logga ut</> : <>Logga in </>}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
