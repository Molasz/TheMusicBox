import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [types.LOADING]: (state, action) => {
      return { ...state, loding: action.payload };
    },

    [types.ERROR]: (state, action) => {
      return { ...state, error: action.payload };
    },
    [types.UPLOAD_IMAGE]: (state, action) => {
      return { ...state, image: action.payload };
    }
  },
  {}
);
