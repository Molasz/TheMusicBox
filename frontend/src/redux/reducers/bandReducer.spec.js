import types from '../actionTypes';
import reducer from './bandReducer';

describe('Band reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle getBand', () => {
    const text = 'we are here';
    const action = {
      type: types.GET_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle showDisc', () => {
    const text = 'we are here';
    const action = {
      type: types.SHOW_DISC,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ disc: text });
  });

  it('should handle searchBand', () => {
    const text = 'we are here';
    const action = {
      type: types.SEARCH_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ search: text });
  });

  it('should handle followBand', () => {
    const text = 'we are here';
    const action = {
      type: types.FOLLOW_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ bandFollowers: text });
  });
});
