import React from 'react';
import renderer from 'react-test-renderer';

import { Discography } from './discography';

jest.mock('./disc/disc');
jest.mock('./songs/songs');

describe('Discography snapshot', () => {
  const data = [''];
  it('Should match without disc selected', () => {
    const disc = undefined;
    const tree = renderer.create(<Discography data={data} disc={disc} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without disc selected', () => {
    const disc = 0;
    const tree = renderer.create(<Discography data={data} disc={disc} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
