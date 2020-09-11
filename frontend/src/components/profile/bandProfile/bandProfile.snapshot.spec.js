import React from 'react';
import renderer from 'react-test-renderer';

import { BandProfile } from './bandProfile';

jest.mock('./discography/discography');
jest.mock('./bandBio/bandBio');
jest.mock('./bandHeader/bandHeader');
//jest.mock('./photos/photos');

describe('BandProfile snapshot', () => {
  const match = { params: { bandId: 1 } };
  const band = {
    socialNetwork: ['twitter'],
    photos: ['photo'],
    _id: 1,
    name: 'name',
    city: 'city',
    country: 'country',
    tags: ['tag'],
    bio: 'bio',
    logo: 'logo',
    banner: 'banner',
    discography: [],
    concerts: [{ date: 'date', city: 'city' }]
  };
  const followers = 1312;
  const user = { following: ['', ''] };
  const dispatch = jest.fn();

  it('Should match with data', () => {
    const tree = renderer.create(
      <BandProfile
        match={match}
        band={band}
        user={user}
        followers={followers}
        dispatch={dispatch}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without data', () => {
    const tree = renderer.create(
      <BandProfile match={match} band={{}} dispatch={dispatch} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
