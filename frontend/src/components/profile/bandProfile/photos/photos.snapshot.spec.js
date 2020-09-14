import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { Photos } from './photos';

describe('Photos snapshot', () => {
  const photos = ['testPhoto.com', 'mockPhoto.com'];
  const photo = 1;
  const dispatch = jest.fn();
  it('Should match ', () => {
    const tree = renderer.create(<Photos photos={photos} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match ', () => {
    const tree = renderer.create(<Photos photos={photos} photo={photo} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos photos={photos} photo={photo} dispatch={dispatch} />
    );
    const button = document.find('.left__back');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos photos={photos} photo={photo} dispatch={dispatch} />
    );
    const button = document.find('#right-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos photos={photos} photo={photo} dispatch={dispatch} />
    );
    const button = document.find('#left-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos photos={photos} photo={0} dispatch={dispatch} />
    );
    const button = document.find('#right-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos photos={photos} photo={0} dispatch={dispatch} />
    );
    const button = document.find('#left-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });
});
