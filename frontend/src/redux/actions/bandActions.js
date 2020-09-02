import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';

export const getBandSuccess = createAction(types.GET_BAND_SUCCESS);

export const getBand = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:1312/band/${id}`);
    const result = await response.json();
    return dispatch(getBandSuccess(result));
  } catch (err) {
    return dispatch(error(err));
  }
};

/*
export function getBand(id) {
  return (dispatch) => {
    return fetch(`http://localhost:1312/band/${id}`)
      .then((response) => dispatch(response))
      .catch((err) => {
        throw new Error(err);
      });
  };
}
*/
