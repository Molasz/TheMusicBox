import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

import onSearch from './onSearch';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ auth, dispatch }) {
  const [redirect, setRedirect] = useState(null);
  const [filter, setFilter] = useState(false);

  return (
    <header className='header'>
      {redirect}
      <Link className='header__logo' to='/' />

      <div className='header__input'>
        <input
          className='input'
          onKeyUp={(event) => onSearch(event, dispatch, setRedirect)}
        ></input>
        <SearchIcon className='icon__search' />
        <ArrowBackIosIcon
          className='icon__arrow'
          onClick={() => setFilter(!filter)}
        />
        {filter && (
          <div className='search__filter'>
            <input type='checkbox' /> Bands
            <input type='checkbox' /> Users
          </div>
        )}
      </div>

      {auth ? (
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
        <LoginButton />
      )}
    </header>
  );
}

export function mapStateToProps(state) {
  return {
    auth: state.authReducer.userIdentifier
  };
}

export default connect(mapStateToProps, null)(Header);
export { Header };
