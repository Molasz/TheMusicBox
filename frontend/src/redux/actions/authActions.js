import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';
import store from '../store';

//Sync

//Async
const sendLoginSuccess = createAction(types.SEND_LOGIN);
export const sendLogin = (user, password) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:1312/auth/login`, { user, password });
    return dispatch(sendLoginSuccess());
  } catch (err) {
    return dispatch(error(err));
  }
};

const sendSignupSuccess = createAction(types.SEND_SIGNUP);
export const sendSignup = (user, password) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:1312/auth/signup`, { user, password });
    dispatch(sendSignupSuccess());
  } catch (err) {
    return dispatch(error(err));
  }
};
