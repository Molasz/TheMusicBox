import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';

import { searchBand } from '../../redux/actions/bandActions';

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ auth, band, dispatch }) {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    setRedirect(null);
  }, []);

  function onSearch(event) {
    if (event.keyCode === 13) {
      dispatch(searchBand(event.target.value.toLowerCase()));
      event.target.value = '';
      setRedirect(<Redirect to='/search' />);
    }
  }

  return (
    <header className='header'>
      {redirect}
      <Link className='header__logo' to='/' />

      <div className='header__input'>
        <input className='input' onKeyUp={onSearch}></input>
        <SearchIcon className='icon__search' />
        <ArrowBackIosIcon className='icon__arrow' />
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
        <LoginButton className='login__icon' />
      )}
    </header>
  );
}

export function mapStateToProps(state) {
  return {
    auth: state.authReducer.userIdentifier,
    band: state.bandReducer.search
  };
}

export default connect(mapStateToProps, null)(Header);
