import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [types.getBand]: (state, action) => {
      return { ...state, band: action.payload };
    }
  },
  {}
);
