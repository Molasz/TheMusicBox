import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bandReducer from './reducers/bandReducer';

const reducer = combineReducers({
  bandReducer
});

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
