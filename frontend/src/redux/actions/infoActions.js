import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';

export const error = createAction(types.ERROR);
export const loading = createAction(types.LOADING);

const uploadImageSuccess = createAction(types.UPLOAD_IMAGE);
export const uploadImage = (bandId, cover) => async (dispatch) => {
  try {
    const response = await axios.post(`/image/log-entries/${bandId}/`, cover);

    return dispatch(uploadImageSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};

const getImageSuccess = createAction(types.GET_IMAGE);
export const getImage = (bandId, imageId) => async (dispatch) => {
  try {
    const response = await axios.get(`/log-entries/${bandId}/${imageId}`);

    return dispatch(getImageSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
