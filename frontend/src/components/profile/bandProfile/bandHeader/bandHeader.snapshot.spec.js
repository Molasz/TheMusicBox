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
  it('Should match ', () => {
    const logo = 'logo';
    const banner = 'banner';
    const name = 'name';
    const bandId = 'bandId';
    const user = { following: ['1'] };
    const followers = 0;

    const tree = renderer.create(
      <BandHeader
        logo={logo}
        banner={banner}
        name={name}
        bandId={bandId}
        user={user}
        followers={followers}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call onFollow when click', () => {
    const document = shallow(<BandHeader />);
    const button = document.find('#follow');
    button.simulate('click', { preventDefault: () => {} });

    expect(onFollow.call).truthy;
  });
});
