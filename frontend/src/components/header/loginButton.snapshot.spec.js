import React from 'react';
import renderer from 'react-test-renderer';

import LoginButton from './loginButton';

describe('Login snapshot', () => {
  const tree = renderer.create(<LoginButton />);
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
