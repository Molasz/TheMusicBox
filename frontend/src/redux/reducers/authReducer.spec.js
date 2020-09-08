import types from '../actionTypes';
import reducer from './authReducer';

describe('Auth reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle saveUser', () => {
    const text = 'we are here';
    const action = {
      type: types.SAVE_USER,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ userIdentifier: text });
  });

  it('should handle removeUser', () => {
    const action = {
      type: types.REMOVE_USER
    };
    expect(reducer({}, action)).toEqual({ userIdentifier: null });
  });

  it('should handle getUser', () => {
    const text = 'we are here';
    const action = {
      type: types.GET_USER,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });

  it('should handle addFollower', () => {
    const text = 'we are here';
    const action = {
      type: types.ADD_FOLLOW,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });

  it('should handle removeFollow', () => {
    const text = 'we are here';
    const action = {
      type: types.REMOVE_FOLLOW,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });
});
