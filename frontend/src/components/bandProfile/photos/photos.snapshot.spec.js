import React from 'react';
import renderer from 'react-test-renderer';

import Photos from './photos';

describe('Photos snapshot', () => {
  const data = ['testPhoto.com', 'mockPhoto.com'];
  const tree = renderer.create(<Photos data={data} />);
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
