import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';

import { mapStateToProps } from './header';

jest.mock('mapStateToProps');

// Problemes amb l'snapshot a compos que utilitzen redux
describe('Header snapshot', () => {
  it('Should match with userIdentifier', () => {
    mapStateToProps.mockReturnValue(1);
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without userIdentifier', () => {
    mapStateToProps.mockReturnValue(null);
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
