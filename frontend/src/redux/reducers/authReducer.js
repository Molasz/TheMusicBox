import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [types.SEND_SIGNUP]: (state, action) => {
      return { ...state, signup: true };
    },
    [types.SEND_LOGIN]: (state, action) => {
      return { ...state, signin: true };
    }
  },
  {}
);
