import { combineReducers } from 'redux';

import bandReducer from './bandReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
  bandReducer,
  authReducer
});

export default reducer;
