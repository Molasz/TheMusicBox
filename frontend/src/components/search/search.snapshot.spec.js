import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Search } from './search';

describe('Search snapshot', () => {
  it('Should match with band data', () => {
    const band = [
      {
        name: 'name',
        city: 'city',
        country: 'country',
        logo: 'logo.com',
        bio: 'blablabla',
        tags: ['punk', 'rock', 'heavy'],
        _id: 0
      }
    ];
    const tree = renderer.create(
      <BrowserRouter>
        <Search band={band} />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
