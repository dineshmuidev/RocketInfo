import React from 'react';
import { shallow } from 'enzyme';
import RocketDetails from './rocket-details';

describe('RocketDetails', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<RocketDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
