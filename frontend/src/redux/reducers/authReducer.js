import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [types.SAVE_USER]: (state, action) => {
      return { ...state, userIdentifier: action.payload };
    },
    [types.REMOVE_USER]: (state, action) => {
      return { ...state, userIdentifier: null };
    },
    [types.GET_USER]: (state, action) => {
      return { ...state, user: action.payload };
    }
  },
  {}
);
