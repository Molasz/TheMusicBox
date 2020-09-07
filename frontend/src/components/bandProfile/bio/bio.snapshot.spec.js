import React from 'react';
import renderer from 'react-test-renderer';

import Bio from './bio';

describe('Bio snapshot', () => {
  const props = {
    city: 'Barcelona',
    country: 'Republica independiente de mi casa',
    bio: '...',
    name: 'Music group'
  };
  const socialNetwork = {
    twitter: 'twitter.com',
    facebook: 'facebook.com',
    instagram: 'instagram.com'
  };
  const tree = renderer.create(
    <Bio props={props} socialNetwork={socialNetwork} />
  );
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
