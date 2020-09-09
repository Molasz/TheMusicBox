import renderer from 'react-test-renderer';
import React from 'react';

import { Songs } from './songs';

describe('Search snapshot', () => {
  it('Should match without band data', () => {
    const info = [
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
    ];
    const index = 0;
    const tree = renderer.create(<Songs info={info} index={index} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
