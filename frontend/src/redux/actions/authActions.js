import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';

//Sync
export const saveUser = createAction(types.SAVE_USER);
export const removeUser = createAction(types.REMOVE_USER);

//Async
const getUserSuccess = createAction(types.GET_USER);
export const getUser = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:1312/auth/${id}`);
    return dispatch(getUserSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
