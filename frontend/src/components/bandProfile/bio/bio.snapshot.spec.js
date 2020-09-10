import React from 'react';
import renderer from 'react-test-renderer';

import Bio from './bio';

describe('Bio snapshot', () => {
  const city = 'Barcelona';
  const country = 'Republica independiente de mi casa';
  const bio = '...';
  const name = 'Music group';

  const socialNetwork = {
    twitter: 'twitter.com',
    facebook: 'facebook.com',
    instagram: 'instagram.com'
  };
  const tree = renderer.create(
    <Bio
      city={city}
      country={country}
      bio={bio}
      name={name}
      socialNetwork={socialNetwork}
    />
  );
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
