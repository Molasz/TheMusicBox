import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';
import axios from 'axios';

//Sync
export const showDisc = createAction(types.SHOW_DISC);

export const bandEdit = createAction(types.BAND_EDIT);
export const bandEditName = createAction(types.BAND_EDIT_NAME);
export const bandEditBio = createAction(types.BAND_EDIT_BIO);
export const bandEditCity = createAction(types.BAND_EDIT_CITY);
export const bandEditCountry = createAction(types.BAND_EDIT_COUNTRY);

//Async
const getBandSuccess = createAction(types.GET_BAND);
export const getBand = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/band/${id}`);
    return dispatch(getBandSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const searchBandSuccess = createAction(types.SEARCH_BAND);
export const searchBand = (text) => async (dispatch) => {
  try {
    const response = await axios.get(`/band/search/${text}`);
    return dispatch(searchBandSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const followSuccess = createAction(types.FOLLOW_BAND);
export const follow = (userIdentifier) => async (dispatch) => {
  try {
    const response = await axios.get(`/band/follow/${userIdentifier}`);
    return dispatch(followSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
