import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [types.GET_BAND_SUCCESS]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.SHOW_DISC]: (state, action) => {
      return { ...state, disc: action.payload };
    }
  },
  {}
);
