import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';

//Sync

//Async
const sendLoginSuccess = createAction(types.SEND_LOGIN);
export const sendLogin = (user, password) => async (dispatch) => {
  debugger;
  try {
    const response = await fetch(`http://localhost:1312/auth/login`, {
      method: 'POST',
      body: { user, password }
    });
    const result = await response.json();
    return dispatch(sendLoginSuccess(result));
  } catch (err) {
    return dispatch(error(err));
  }
};
