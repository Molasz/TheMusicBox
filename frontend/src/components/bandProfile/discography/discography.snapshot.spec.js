import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Discography } from './discography';

xdescribe('Search snapshot', () => {
  it('Should match without band data', () => {
    const data = [];
    const disc = 0;
    const tree = renderer.create(
      <BrowserRouter>
        <Discography data={data} disc={disc} />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
