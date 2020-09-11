import React from 'react';
import renderer from 'react-test-renderer';

import { BandBio } from './bandBio';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('bandBio snapshot', () => {
  const city = 'Barcelona';
  const country = 'Republica independiente de mi casa';
  const bio = '...';
  const name = 'Music group';

  const socialNetwork = {
    twitter: 'twitter.com',
    facebook: 'facebook.com',
    instagram: 'instagram.com'
  };
  it('Should match ', () => {
    const tree = renderer.create(
      <BandBio
        city={city}
        country={country}
        bio={bio}
        name={name}
        socialNetwork={socialNetwork}
        editInfo={{}}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call loginWithRedirect when click', () => {
    const editInfo = { user: 'user', bio: 'bio' };
    const document = shallow(<BandBio editInfo={editInfo} />);
    const button = document.find('.login');
    button.simulate('click', { preventDefault: () => {} });

    expect(loginMock.call).truthy;
  });
});
