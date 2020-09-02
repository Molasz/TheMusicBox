import types from '../actionTypes';
import reducer from './bandReducer';

describe('Band reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle getBand', () => {
    const text = 'we are here';
    const action = {
      type: types.GET_BAND_SUCCESS,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });
});
