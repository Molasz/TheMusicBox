import React from 'react';
import { connect } from 'react-redux';

import store from '../../redux/store';
import { sendLogin } from '../../redux/actions/authActions';

import './login.scss';

function Login() {
  function onLogin(event) {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    store.dispatch(sendLogin(user, password));
  }
  return (
    <section>
      <input type='text' name='user' id='user' required />
      <input type='password' name='password' id='password' required />

      <button type='button' onClick={(event) => onLogin(event)}>
        Login
      </button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return { sendLogin };
}

export default connect(null, mapDispatchToProps)(Login);
