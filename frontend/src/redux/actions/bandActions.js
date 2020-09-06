import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';
import axios from 'axios';

//Sync
export const showDisc = createAction(types.SHOW_DISC);

//Async
const getBandSuccess = createAction(types.GET_BAND_SUCCESS);
export const getBand = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/band/${id}`);
    return dispatch(getBandSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
