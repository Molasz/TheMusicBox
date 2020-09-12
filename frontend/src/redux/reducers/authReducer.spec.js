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

  it('should handle sendEditInfo', () => {
    const text = 'we are here';
    const action = {
      type: types.SEND_EDIT_INFO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ user: text });
  });

  it('should handle edit', () => {
    const text = 'we are here';
    const action = {
      type: types.EDIT,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: text });
  });

  it('should handle editName', () => {
    const text = 'we are here';
    const action = {
      type: types.EDIT_NAME,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { user: text } });
  });

  it('should handle editBio', () => {
    const text = 'we are here';
    const action = {
      type: types.EDIT_BIO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { bio: text } });
  });
});
