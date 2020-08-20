import React from 'react';
import { shallow } from 'enzyme';
import Rocket from './rocket';

describe('Rocket', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Rocket />);
    expect(wrapper).toMatchSnapshot();
  });
});
