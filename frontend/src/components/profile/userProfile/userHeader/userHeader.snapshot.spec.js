import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import { ProfileHeader } from './userHeader';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import onSave from './onSave';
jest.mock('./onSave');

describe('ProfileHeader snapshot', () => {
  const photo = 'photo';
  const banner = 'banner';

  it('Should match without editInfo', () => {
    const editInfo = {};
    const tree = renderer.create(
      <ProfileHeader photo={photo} banner={banner} editInfo={editInfo} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without editInfo', () => {
    const editInfo = { user: 'user', bio: 'bio' };
    const tree = renderer.create(
      <ProfileHeader photo={photo} banner={banner} editInfo={editInfo} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const user = { user: 'user', bio: 'bio' };
  const editInfo = { user: 'user', bio: 'bio' };
  const dispatch = jest.fn();
  const document = shallow(
    <ProfileHeader
      user={user}
      photo={photo}
      banner={banner}
      editInfo={editInfo}
      dispatch={dispatch}
    />
  );

  it('Should call dispatch when click gear', () => {
    const button = document.find('.edit__gear');
    button.simulate('click', { preventDefault: () => {} });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click gear', () => {
    const document = shallow(
      <ProfileHeader
        user={user}
        photo={photo}
        banner={banner}
        editInfo={{}}
        dispatch={dispatch}
      />
    );
    const button = document.find('.edit__gear');
    button.simulate('click', { preventDefault: () => {} });

    expect(dispatch.call).truthy;
  });

  it('Should call onSave when click save', () => {
    const button = document.find('.edit__save');
    button.simulate('click', { preventDefault: () => {} });

    expect(onSave.call).truthy;
  });
});
