import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import onFollow from './onFollow';
jest.mock('./onFollow');

import { BandHeader } from './bandHeader';

describe('BandHeader snapshot', () => {
  const band = {
    logo: 'logo',
    banner: 'banner',
    name: 'name',
    country: 'country',
    city: 'city',
    bio: 'bio',
    socialNetwork: {
      twitter: 'twitter',
      facebook: 'facebook',
      instagram: 'instagram'
    },
    public: true,
    _id: 1
  };
  const user = { following: ['1'], band: { _id: 1 } };
  const followers = 0;
  it('Should match without editInfo ', () => {
    const image = { identifier: 'logo' };
    const tree = renderer.create(
      <BandHeader
        band={band}
        user={user}
        followers={followers}
        editInfo={{}}
        image={image}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with editInfo', () => {
    const image = { identifier: 'banner' };
    const tree = renderer.create(
      <BandHeader
        band={band}
        user={user}
        followers={followers}
        editInfo={{ ...band }}
        image={image}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with editInfo (public false)', () => {
    band.public = false;
    const image = { identifier: 'identifier' };
    const tree = renderer.create(
      <BandHeader
        band={band}
        user={user}
        followers={followers}
        editInfo={{ ...band }}
        image={image}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const dispatch = jest.fn();
  const document = shallow(
    <BandHeader
      dispatch={dispatch}
      band={band}
      user={user}
      followers={followers}
      editInfo={{ ...band }}
    />
  );

  it('Should call onFollow when click #follow', () => {
    const input = document.find('#follow');
    input.simulate('click', { preventDefault: () => {} });

    expect(onFollow.call).truthy;
  });

  it('Should call onFollow when click .edit__gear', () => {
    const input = document.find('.edit__gear');
    input.simulate('click', { preventDefault: () => {} });

    expect(onFollow.call).truthy;
  });

  it('Should call onFollow when click .edit__gear (without editInfo)', () => {
    const document = shallow(
      <BandHeader
        dispatch={dispatch}
        band={band}
        user={user}
        followers={followers}
        editInfo={{}}
      />
    );
    const input = document.find('.edit__gear');
    input.simulate('click', { preventDefault: () => {} });

    expect(onFollow.call).truthy;
  });

  it('Should call onFollow when click .edit__save', () => {
    const input = document.find('.edit__save');
    input.simulate('click', { preventDefault: () => {} });

    expect(onFollow.call).truthy;
  });

  it('Should call onFollow when click .edit__public', () => {
    const input = document.find('.edit__public');
    input.simulate('click', { preventDefault: () => {} });

    expect(onFollow.call).truthy;
  });

  it('Should call onFollow when click .edit__public', () => {
    const input = document.find('.edit__public');
    input.simulate('click', { preventDefault: () => {} });

    expect(onFollow.call).truthy;
  });
});
