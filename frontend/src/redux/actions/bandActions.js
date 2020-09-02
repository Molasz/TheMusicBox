import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';

export const getBandSuccess = createAction(types.GET_BAND_SUCCESS);

export const getBand = (id) => async (dispatch) => {
  console.log("he fet l'accio");
  try {
    const response = await fetch(`http://localhost:1312/band/${id}`);
    dispatch(getBandSuccess(response));
  } catch (err) {
    dispatch(error(err));
  }
};
