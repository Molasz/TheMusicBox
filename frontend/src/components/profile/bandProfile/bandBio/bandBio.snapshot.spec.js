import React from 'react';
import renderer from 'react-test-renderer';

import BandBio from './bandBio';

describe('bandBio snapshot', () => {
  const city = 'Barcelona';
  const country = 'Republica independiente de mi casa';
  const bio = '...';
  const name = 'Music group';

  const socialNetwork = {
    twitter: 'twitter.com',
    facebook: 'facebook.com',
    instagram: 'instagram.com'
  };
  it('Should match ', () => {
    const tree = renderer.create(
      <BandBio
        city={city}
        country={country}
        bio={bio}
        name={name}
        socialNetwork={socialNetwork}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
