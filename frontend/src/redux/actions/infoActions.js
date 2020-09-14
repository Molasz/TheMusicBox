import { createAction } from 'redux-actions';

import types from '../actionTypes';

export const error = createAction(types.ERROR);
export const loading = createAction(types.LOADING);
