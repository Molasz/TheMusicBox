import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';

export const error = createAction(types.ERROR);
export const loading = createAction(types.LOADING);
export const clearImage = createAction(types.CLEAR_IMAGE);

const uploadImageSuccess = createAction(types.UPLOAD_IMAGE);
export const uploadImage = (id, img, indentifier) => async (dispatch) => {
  try {
    const response = await axios.post(`/image/log-entries/${id}/`, img);
    response.data.identifier = indentifier;
    return dispatch(uploadImageSuccess(response.data));
  } catch (err) {
    return dispatch(error(err));
  }
};
