import renderer from 'react-test-renderer';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

import { Disc } from './disc';

import onShow from './onShow';

jest.dontMock('./disc');
jest.mock('./onShow');

describe('Search snapshot', () => {
  const info = {
    title: 'title',
    img: 'img'
  };
  const index = 0;
  it('Should match without band data', () => {
    const tree = renderer.create(<Disc data={info} index={index} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call onShow when click', () => {
    const document = shallow(<Disc data={info} index={index} />);
    const button = document.find('.item__img');
    button.simulate('click', { preventDefault: () => {} });

    expect(onShow.call).truthy;
  });
});
