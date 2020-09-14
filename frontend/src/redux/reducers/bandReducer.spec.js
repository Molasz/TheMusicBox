import types from '../actionTypes';
import reducer from './bandReducer';

describe('Band reducer', () => {
  const text = 'we are here';
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle getBand', () => {
    const action = {
      type: types.GET_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle showDisc', () => {
    const action = {
      type: types.SHOW_DISC,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ disc: text });
  });

  it('should handle searchBand', () => {
    const action = {
      type: types.SEARCH_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ search: text });
  });

  it('should handle followBand', () => {
    const action = {
      type: types.FOLLOW_BAND,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ bandFollowers: text });
  });
  ///////////////////////////////////////////////
  it('should handle sendBandEditInfo', () => {
    const action = {
      type: types.SEND_BAND_EDIT_INFO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ band: text });
  });

  it('should handle bandEdit', () => {
    const action = {
      type: types.BAND_EDIT,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: text });
  });

  it('should handle bandEditName', () => {
    const action = {
      type: types.BAND_EDIT_NAME,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { name: text } });
  });

  it('should handle bandEditBio', () => {
    const action = {
      type: types.BAND_EDIT_BIO,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { bio: text } });
  });

  it('should handle bandEditCity', () => {
    const action = {
      type: types.BAND_EDIT_CITY,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { city: text } });
  });

  it('should handle bandEditCountry', () => {
    const action = {
      type: types.BAND_EDIT_COUNTRY,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { country: text } });
  });

  it('should handle bandEditTwitter', () => {
    const action = {
      type: types.BAND_EDIT_TWITTER,
      payload: text
    };
    expect(reducer({ editInfo: { socialNetwork: {} } }, action)).toEqual({
      editInfo: { socialNetwork: { twitter: text } }
    });
  });

  it('should handle bandEditFacebook', () => {
    const action = {
      type: types.BAND_EDIT_FACEBOOK,
      payload: text
    };
    expect(reducer({ editInfo: { socialNetwork: {} } }, action)).toEqual({
      editInfo: { socialNetwork: { facebook: text } }
    });
  });

  it('should handle bandEditInstagram', () => {
    const action = {
      type: types.BAND_EDIT_INSTAGRAM,
      payload: text
    };
    expect(reducer({ editInfo: { socialNetwork: {} } }, action)).toEqual({
      editInfo: { socialNetwork: { instagram: text } }
    });
  });

  it('should handle bandEditPublic', () => {
    const action = {
      type: types.BAND_EDIT_PUBLIC,
      payload: text
    };
    expect(reducer({}, action)).toEqual({ editInfo: { public: text } });
  });
});
