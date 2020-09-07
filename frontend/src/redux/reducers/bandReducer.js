import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [types.GET_BAND]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.SHOW_DISC]: (state, action) => {
      return { ...state, disc: action.payload };
    },
    [types.SEARCH_BAND]: (state, action) => {
      return { ...state, search: action.payload };
    }
  },
  {}
);
