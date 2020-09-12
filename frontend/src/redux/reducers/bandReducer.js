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
    },
    [types.FOLLOW_BAND]: (state, action) => {
      return { ...state, bandFollowers: action.payload };
    },
    ///
    [types.SEND_BAND_EDIT_INFO]: (state, action) => {
      return { ...state, band: action.payload };
    },

    [types.BAND_EDIT]: (state, action) => {
      return { ...state, editInfo: action.payload };
    },
    [types.BAND_EDIT_NAME]: (state, action) => {
      return {
        ...state,
        editInfo: { ...state.editInfo, user: action.payload }
      };
    },
    [types.BAND_EDIT_BIO]: (state, action) => {
      return { ...state, editInfo: { ...state.editInfo, bio: action.payload } };
    },
    [types.BAND_EDIT_CITY]: (state, action) => {
      return {
        ...state,
        editInfo: { ...state.editInfo, city: action.payload }
      };
    },
    [types.BAND_EDIT_COUNTRY]: (state, action) => {
      return {
        ...state,
        editInfo: { ...state.editInfo, country: action.payload }
      };
    }
  },
  {}
);
