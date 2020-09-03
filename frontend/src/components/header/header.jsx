import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import LoginIcon from '@material-ui/icons/ExitToApp';

function header({ isLogged }) {
  return (
    <header className='header'>
      <Link className='header__logo' to='/' />

      <input className='header__input'></input>

      {isLogged ? (
        <div className='header__menu'>
          <MenuIcon className='menu__icon' />
          <div className='menu__content'>
            <div className='content__list'>
              <Link to='/profile' className='list__item'>
                Profile
              </Link>
              <Link to='/profile/settings' className='list__item'>
                Settings
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Link to='/login' className='header__login'>
          <LoginIcon className='login__icon' />
        </Link>
      )}
    </header>
  );
}

export default header;
