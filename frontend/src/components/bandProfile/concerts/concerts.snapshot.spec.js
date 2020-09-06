import React from 'react';
import renderer from 'react-test-renderer';

import Concerts from './concerts';

describe('Concerts snapshot', () => {
  const data = [{ data: 'Today', city: 'My house' }];
  const tree = renderer.create(<Concerts data={data} />);
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
