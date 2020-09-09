import renderer from 'react-test-renderer';
import React from 'react';

import { Disc } from './disc';

describe('Search snapshot', () => {
  it('Should match without band data', () => {
    const info = {
      title: 'title',
      img: 'img'
    };
    const index = 0;
    const tree = renderer.create(<Disc data={info} index={index} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
