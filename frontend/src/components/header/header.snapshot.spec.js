import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';

jest.mock('./header', () => ({ mapStateToProps: jest.fn }));

// Problemes amb l'snapshot a compos que utilitzen redux
xdescribe('Header snapshot', () => {
  it('Should match with userIdentifier', () => {
    mapStateToProps.mockImplementation(() => 13);
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without userIdentifier', () => {
    mapStateToProps.mockImplementation(() => null);
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
