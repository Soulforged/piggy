//@flow
import React from 'react';
import { shallow } from 'enzyme';

import LocationSelect from 'ubex/components/LocationSelect';

const props = {
  setPositionById: jest.fn(),
  predictions: {}
}

it('sets position on press', () => {
  const wrapper = shallow(<LocationSelect ...props />);
  wrapper.find('Button').onPress();
  expect(setPositionById).toHaveBeenCalled(1);
});
