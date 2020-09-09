import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BandProfile } from './bandProfile';

describe('Search snapshot', () => {
  xit('Should match with band data', () => {
    const band = {
      _id: 0,
      logo: 'logo',
      banner: 'banner',
      name: 'name',
      bio: 'bio',
      city: 'city',
      country: 'country',
      socialNetwork: ['twitter'],
      discography: [
        {
          title: 'title',
          img: 'img',
          date: 'date',
          songs: [
            {
              title: 'title',
              time: 'time'
            }
          ]
        }
      ],
      concerts: [{ date: 'date', city: 'city' }],
      photos: ['photo']
    };
    const tree = renderer.create(
      <BrowserRouter>
        <BandProfile band={band} />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without band data', () => {
    // const followers = 0;
    // const user = { _id: 0 };
    const tree = renderer.create(
      <BrowserRouter>
        <BandProfile band={null} /*followers={followers} user={user}*/ />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
