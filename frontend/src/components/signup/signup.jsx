import React from 'react';
import { connect } from 'react-redux';

import store from '../../redux/store';
import { sendSignup } from '../../redux/actions/authActions';

import './signup.scss';

function Signup() {
  function onSignup(event) {
    event.preventDefault();
    if (
      document.getElementById('password').value ===
      document.getElementById('confirm-password').value
    ) {
      const user = document.getElementById('user').value;
      const password = document.getElementById('password').value;
      debugger;
      store.dispatch(sendSignup(user, password));
    } else {
      alert('Passwords are not the same');
    }
  }
  return (
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

      <button type='button' onClick={(event) => onSignup(event)}>
        Login
      </button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return { sendSignup };
}

export default connect(null, mapDispatchToProps)(Signup);
