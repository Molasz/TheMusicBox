import axios from 'axios';
import { createAction } from 'redux-actions';

import types from '../actionTypes';
import { error } from './errorAction';

//Sync
export const saveUser = createAction(types.SAVE_USER);
export const removeUser = createAction(types.REMOVE_USER);

//Async
