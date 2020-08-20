import React from 'react';
import { shallow } from 'enzyme';
import RocketTitle from './rocket-title';

describe('RocketTitle', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<RocketTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
