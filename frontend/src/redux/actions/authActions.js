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

const addFollowSuccess = createAction(types.ADD_FOLLOW);
export const addFollow = (userId, bandId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/follow/${userId}`,
      { band: bandId },
      { headers }
    );
    response.data.following.push(bandId);
    return dispatch(addFollowSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const removeFollowSuccess = createAction(types.REMOVE_FOLLOW);
export const removeFollow = (userId, bandId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/followDelete/${userId}`,
      { band: bandId },
      { headers }
    );
    response.data.following.filter((item) => item !== bandId);
    return dispatch(removeFollowSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
