import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { BandBio } from './bandBio';

describe('bandBio snapshot', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const band = {
    city: 'city',
    country: 'country',
    bio: 'bio',
    name: 'name',
    socialNetwork: {
      twitter: 'twitter',
      facebook: 'facebook',
      instagram: 'instagram'
    }
  };

  it('Should match without editInfo', () => {
    const editInfo = {};
    const tree = renderer.create(<BandBio band={band} editInfo={editInfo} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with editInfo', () => {
    const editInfo = {
      city: 'city',
      country: 'country',
      bio: '...',
      name: 'name',
      socialNetwork: {
        twitter: 'twitter',
        facebook: 'facebook',
        instagram: 'instagram'
      }
    };
    const tree = renderer.create(<BandBio editInfo={editInfo} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const dispatch = jest.fn();
  const editInfo = {
    city: 'city',
    country: 'country',
    bio: '...',
    name: 'name',
    socialNetwork: {
      twitter: 'twitter',
      facebook: 'facebook',
      instagram: 'instagram'
    }
  };

  const document = shallow(<BandBio dispatch={dispatch} editInfo={editInfo} />);

  it('Should call dispatch when change name input', () => {
    const button = document.find('.top__name');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when change city input', () => {
    const button = document.find('.region__city');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when change country input', () => {
    const button = document.find('.region__country');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when change bio input', () => {
    const button = document.find('.middle__bio');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when change bio input', () => {
    const button = document.find('#twitter');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when change bio input', () => {
    const button = document.find('#facebook');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when change bio input', () => {
    const button = document.find('#instagram');
    button.simulate('change', { target: { value: 1 } });

    expect(dispatch.call).truthy;
  });
});
