import React from 'react';
import './header.scss';

function header() {
  return (
    <header className='header'>
      <img
        src={require('../assets/logo_white.png')}
        alt='header logo'
        className='header__logo'
      />
      <input className='header__input'></input>
      <img
        src={require('../assets/login.png')}
        alt='login icon'
        className='header__menu'
      />
    </header>
  );
}

export default header;
