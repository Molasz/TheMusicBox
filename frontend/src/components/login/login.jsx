import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import store from '../../redux/store';
import { sendLogin } from '../../redux/actions/authActions';

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

import './login.scss';

function Login({ signin }) {
  function onLogin(event) {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    store.dispatch(sendLogin(user, password));
  }
  return signin ? (
    <Redirect to='/profile' />
  ) : (
    <section>
      <input type='text' name='user' id='user' required />
      <input type='password' name='password' id='password' required />

      <LoginButton />
      <LogoutButton />
    </section>
  );
}

function mapStateToProps(state) {
  return state.authReducer;
}

function mapDispatchToProps(dispatch) {
  return { sendLogin };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
