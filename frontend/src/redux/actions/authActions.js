import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';

// Sync
export const saveUser = createAction(types.SAVE_USER);
export const removeUser = createAction(types.REMOVE_USER);

// Async
const getUserSuccess = createAction(types.GET_USER);
export const getUser = (user) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/${user.sub}`,
      { nickname: user.nickname },
      { headers }
    );
    return dispatch(getUserSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
