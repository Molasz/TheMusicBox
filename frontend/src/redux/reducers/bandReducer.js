import types from '../actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions(
  {
    //Load band data
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

    //Edit band info
    [types.SEND_BAND_EDIT_INFO]: (state, action) => {
      return { ...state, band: action.payload };
    },

    [types.BAND_EDIT]: (state, action) => {
      return { ...state, editInfo: action.payload };
    },
    [types.BAND_EDIT_NAME]: (state, action) => {
      return {
        ...state,
        editInfo: { ...state.editInfo, name: action.payload }
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
    },
    [types.BAND_EDIT_TWITTER]: (state, action) => {
      return {
        ...state,
        editInfo: {
          ...state.editInfo,
          socialNetwork: {
            ...state.editInfo.socialNetwork,
            twitter: action.payload
          }
        }
      };
    },
    [types.BAND_EDIT_FACEBOOK]: (state, action) => {
      return {
        ...state,
        editInfo: {
          ...state.editInfo,
          socialNetwork: {
            ...state.editInfo.socialNetwork,
            facebook: action.payload
          }
        }
      };
    },
    [types.BAND_EDIT_INSTAGRAM]: (state, action) => {
      return {
        ...state,
        editInfo: {
          ...state.editInfo,
          socialNetwork: {
            ...state.editInfo.socialNetwork,
            instagram: action.payload
          }
        }
      };
    },
    [types.BAND_EDIT_PUBLIC]: (state, action) => {
      return {
        ...state,
        editInfo: { ...state.editInfo, public: action.payload }
      };
    },

    [types.CREATE_DISC]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.DELETE_DISC]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.CREATE_CONCERT]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.DELETE_CONCERT]: (state, action) => {
      return { ...state, band: action.payload };
    },
    [types.SHOW_PHOTO]: (state, action) => {
      return { ...state, showPhoto: action.payload };
    }
  },
  {}
);
