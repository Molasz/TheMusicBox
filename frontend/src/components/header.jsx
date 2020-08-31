import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';

function header({ isLogged }) {
  return (
    <header className='header'>
      <Link className='header__logo' to='/' />

      <input className='header__input'></input>

      {isLogged ? (
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
          alt='manu icon'
          className='header__menu'
        />
      ) : (
        <Link to='/login' className='header__login'>
          <img
            src={require('../assets/login.png')}
            alt='login icon'
            className='login__icon'
          />
        </Link>
      )}
    </header>
  );
}

export default header;
