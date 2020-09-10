import React from 'react';
import renderer from 'react-test-renderer';

import { BandProfile } from './bandProfile';

jest.mock('./discography/discography');

describe('BandProfile snapshot', () => {
  const match = { params: { bandId: 0 } };
  const band = {
    _id: 1,
    logo: 'logo',
    banner: 'banner',
    name: 'name',
    bio: 'bio',
    city: 'city',
    country: 'country',
    socialNetwork: ['twitter'],
    discography: [],
    concerts: ['concert'],
    photos: ['photo']
  };
  const user = { following: ['', ''] };
  const dispatch = jest.fn();

  it('Should match with data', () => {
    const tree = renderer.create(
      <BandProfile match={match} band={band} user={user} dispatch={dispatch} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without data', () => {
    const tree = renderer.create(
      <BandProfile match={match} dispatch={dispatch} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
