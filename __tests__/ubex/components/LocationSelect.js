//@flow
import React from 'react';
import { shallow } from 'enzyme';

import LocationSelect from 'ubex/components/LocationSelect';

const props = {
  setPositionById: jest.fn(),
  predictions: {
    fetching: false,
    items: [{ id: '1', description: 'some', key: '1' }]
  }
};

it('sets position on press', () => {
  const wrapper = shallow(<LocationSelect {...props} />);
  const render = wrapper.dive().find('FlatList').dive().find('VirtualizedList')
    .dive()
    .find('CellRenderer')
    .dive()
    .find('Button');
  expect(render.props().title).toBe('some');
  render.simulate('press');
  expect(props.setPositionById).toHaveBeenCalledTimes(1);
});
