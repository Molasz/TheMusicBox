import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import store from '../../redux/store';

import './signup.scss';

function Signup({ signup }) {
  function onSignup(event) {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password === confirmPassword) {
      // store.dispatch(sendSignup(user, password));
    } else {
      alert("Passwords aren't identical");
    }
  }
  return signup ? (
    <Redirect to='/login' />
  ) : (
    <section>
      <input type='text' name='user' id='user' required />
      <input
        type='password'
        name='password'
        id='password'
        required
        pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$'
      />
      <input
        type='password'
        name='confirm-password'
        id='confirm-password'
        required
        pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$'
      />

      <button type='submit' onClick={(event) => onSignup(event)}>
        Login
      </button>
    </section>
  );
}

function mapStateToProps(state) {
  return state.authReducer;
}

export default connect(mapStateToProps, null)(Signup);
