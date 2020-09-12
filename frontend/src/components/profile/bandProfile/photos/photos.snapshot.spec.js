import React from 'react';
import renderer from 'react-test-renderer';

import Photos from './photos';

describe('Photos snapshot', () => {
  const photos = ['testPhoto.com', 'mockPhoto.com'];
  const tree = renderer.create(<Photos photos={photos} />);
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
