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
  const editInfo = { name: 'name' };
  const image = { identifier: 'new-photo', path: 'path' };
  const band = { _id: 1, photos: [1, 2, 3] };
  const dispatch = jest.fn();

  it('Should match ', () => {
    const tree = renderer.create(
      <Photos
        photos={photos}
        editInfo={editInfo}
        image={image}
        band={band}
        dispatch={dispatch}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match ', () => {
    const tree = renderer.create(
      <Photos
        photos={photos}
        photo={photo}
        editInfo={editInfo}
        image={image}
        band={band}
        disptach={dispatch}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos
        photos={photos}
        photo={photo}
        editInfo={editInfo}
        dispatch={dispatch}
      />
    );
    const button = document.find('#back');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos
        photos={photos}
        photo={photo}
        editInfo={editInfo}
        dispatch={dispatch}
        band={band}
      />
    );
    const button = document.find('#delete');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos
        photos={photos}
        photo={photo}
        editInfo={editInfo}
        dispatch={dispatch}
      />
    );
    const button = document.find('#left-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos
        photos={photos}
        photo={0}
        editInfo={editInfo}
        dispatch={dispatch}
      />
    );
    const button = document.find('#right-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos
        photos={photos}
        photo={0}
        editInfo={editInfo}
        dispatch={dispatch}
      />
    );
    const button = document.find('#left-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos
        photos={photos}
        photo={1}
        editInfo={editInfo}
        dispatch={dispatch}
      />
    );
    const button = document.find('#right-arrow');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos
        photos={photos}
        photo={0}
        editInfo={editInfo}
        dispatch={dispatch}
      />
    );
    const button = document.find('.color');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Photos photos={photos} editInfo={editInfo} dispatch={dispatch} />
    );
    const button = document.find('#item0');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });
});
