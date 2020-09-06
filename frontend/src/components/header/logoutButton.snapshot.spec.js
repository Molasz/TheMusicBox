import React from 'react';
import renderer from 'react-test-renderer';

import LogoutButton from './logoutButton';

describe('Logout snapshot', () => {
  const tree = renderer.create(<LogoutButton />);
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
