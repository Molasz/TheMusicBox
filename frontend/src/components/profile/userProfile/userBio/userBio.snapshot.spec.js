import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { UserBio } from './userBio';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Bio test', () => {
  describe('Bio snapshot', () => {
    const bio = '...';
    const name = 'name';
    const mongoUser = {
      band: {
        logo: 'logo',
        name: 'name',
        _id: 1
      },
      _id: 1
    };

    it('Should match whitout edit info', () => {
      const editInfo = {};
      const tree = renderer.create(
        <BrowserRouter>
          <UserBio
            bio={bio}
            name={name}
            editInfo={editInfo}
            mongoUser={mongoUser}
          />
        </BrowserRouter>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Should match with edit info', () => {
      const editInfo = { user: 'user', bio: 'bio' };
      mongoUser.band = null;
      const tree = renderer.create(
        <BrowserRouter>
          <UserBio
            bio={bio}
            name={name}
            editInfo={editInfo}
            mongoUser={mongoUser}
          />
        </BrowserRouter>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  xdescribe('Simulate clicks', () => {
    const dispatch = jest.fn();
    const editInfo = { user: 'user', bio: 'bio' };
    const mongoUser = {
      band: {
        logo: 'logo',
        name: 'name',
        _id: 1
      },
      _id: 1
    };

    const document = shallow(
      <BrowserRouter>
        <UserBio dispatch={dispatch} mongoUser={mongoUser} />
      </BrowserRouter>
    );

    it('Should call dispatch when change input', () => {
      const button = document.find('#input');
      button.simulate('change', { target: { value: 1 } });

      expect(dispatch.call).truthy;
    });

    it('Should call dispatch when change textArea', () => {
      const button = document.find('#textarea');
      button.simulate('change', { target: { value: 1 } });

      expect(dispatch.call).truthy;
    });
  });
});
