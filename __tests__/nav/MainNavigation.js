//@flow
import React from 'react';
import { shallow } from 'enzyme';

import MainNavigation from 'src/nav/MainNavigation';

it('renders without crashing', () => {
  const wrapper = shallow(<MainNavigation />);
  expect(wrapper).toMatchSnapshot();
});
