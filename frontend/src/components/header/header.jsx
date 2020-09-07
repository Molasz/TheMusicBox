import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../../redux/store';

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

import MenuIcon from '@material-ui/icons/Menu';

function Header({ userIdentifier }) {
  function onSearch(event) {
    if (event.keyCode === 13) alert(event.target.value);
  }

  return (
    <header className='header'>
      <Link className='header__logo' to='/' />

      <input className='header__input' onKeyUp={onSearch}></input>

      {userIdentifier ? (
        <div className='header__menu'>
          <MenuIcon className='menu__icon' />
          <div className='menu__content'>
            <div className='content__list'>
              <Link to='/profile' className='list__item'>
                Profile
              </Link>
              <LogoutButton />
            </div>
          </div>
        </div>
      ) : (
        <LoginButton className='login__icon' />
      )}
    </header>
  );
}

export function mapStateToProps(state) {
  return state.authReducer;
}

export default connect(mapStateToProps, null)(Header);
