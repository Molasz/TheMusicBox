import renderer from 'react-test-renderer';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { Songs } from './songs';

import onBack from './onBack';
jest.mock('./onBack');

describe('Search snapshot', () => {
  const info = [
    {
      title: 'title',
      songs: [{ time: 'time', title: 'title' }],
      date: 'date',
      img: 'img'
    }
  ];
  const index = 0;
  it('Should match without band data', () => {
    const tree = renderer.create(<Songs info={info} index={index} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call onBack when click', () => {
    const document = shallow(<Songs info={info} index={index} />);
    const button = document.find('.content__icon');
    button.simulate('click', { preventDefault: () => {} });

    expect(onBack.call).truthy;
  });
});
