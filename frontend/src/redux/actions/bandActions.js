import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';
import axios from 'axios';

//Sync
export const showDisc = createAction(types.SHOW_DISC);

//Edit band profile
export const bandEdit = createAction(types.BAND_EDIT);
export const bandEditName = createAction(types.BAND_EDIT_NAME);
export const bandEditBio = createAction(types.BAND_EDIT_BIO);
export const bandEditCity = createAction(types.BAND_EDIT_CITY);
export const bandEditCountry = createAction(types.BAND_EDIT_COUNTRY);
export const bandEditTwitter = createAction(types.BAND_EDIT_TWITTER);
export const bandEditFacebook = createAction(types.BAND_EDIT_FACEBOOK);
export const bandEditInstagram = createAction(types.BAND_EDIT_INSTAGRAM);
export const bandEditPublic = createAction(types.BAND_EDIT_PUBLIC);

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

const sendBandEditInfoSuccess = createAction(types.SEND_BAND_EDIT_INFO);
export const sendBandEditInfo = (bandId, editInfo) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(`/auth/band/${bandId}`, editInfo, {
      headers
    });
    const temp = { ...response.data, ...editInfo };
    return dispatch(sendBandEditInfoSuccess(temp));
  } catch (err) {
    return dispatch(error(err));
  }
};

const createDiscSuccess = createAction(types.CREATE_DISC);
export const createDisc = (bandId, discInfo) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(`/auth/newDisc/${bandId}`, discInfo, {
      headers
    });
    response.data.discography.push(discInfo);
    return dispatch(createDiscSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const deleteDiscSuccess = createAction(types.DELETE_DISC);
export const deleteDisc = (bandId, deleteId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(
      `/auth/newDisc/${bandId}`,
      { deleteId },
      {
        headers
      }
    );
    response.data.discography = response.data.discography.filter(
      (element) => element._id !== deleteId
    );

    return dispatch(deleteDiscSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const createConcertSuccess = createAction(types.CREATE_CONCERT);
export const createConcert = (bandId, concertInfo) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.post(
      `/auth/newConcert/${bandId}`,
      concertInfo,
      {
        headers
      }
    );
    response.data.concerts.push(concertInfo);
    return dispatch(createConcertSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const deleteConcertSuccess = createAction(types.DELETE_CONCERT);
export const deleteConcert = (bandId, deleteId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`
    };
    const response = await axios.patch(
      `/auth/newConcert/${bandId}`,
      { deleteId },
      {
        headers
      }
    );
    response.data.concerts = response.data.concerts.filter(
      (element) => element._id !== deleteId
    );

    return dispatch(deleteConcertSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
