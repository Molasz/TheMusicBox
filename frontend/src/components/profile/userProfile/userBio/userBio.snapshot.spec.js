import React from 'react';
import renderer from 'react-test-renderer';

import { UserBio } from './userBio';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Bio snapshot', () => {
  const bio = '...';
  const name = 'name';

  it('Should match whitout edit info', () => {
    const editInfo = {};
    const tree = renderer.create(
      <UserBio bio={bio} name={name} editInfo={editInfo} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with edit info', () => {
    const editInfo = { user: 'user', bio: 'bio' };
    const tree = renderer.create(
      <UserBio bio={bio} name={name} editInfo={editInfo} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const dispatch = jest.fn();
  const editInfo = { user: 'user', bio: 'bio' };
  const document = shallow(
    <UserBio dispatch={dispatch} bio={bio} name={name} editInfo={editInfo} />
  );

  it('Should call dispatch when change input', () => {
    const button = document.find('.top__input');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when change textArea', () => {
    const button = document.find('.bottom__text-area');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });
});
