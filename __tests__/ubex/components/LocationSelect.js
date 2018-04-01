//@flow
import React from 'react';
import { shallow } from 'enzyme';

import LocationSelect from 'ubex/components/LocationSelect';

const props = {
  setPositionById: jest.fn(),
  fetchPredictions: jest.fn(),
  predictions: {
    fetching: false,
    items: [{ id: '1', description: 'some', key: '1' }]
  }
};

it('calls set position on press', () => {
  const wrapper = shallow(<LocationSelect {...props} />);
  const vList = wrapper.dive().find('FlatList').dive().find('VirtualizedList');
  const button = vList.dive().find('CellRenderer').dive().find('Button');
  expect(button.props().title).toBe('some');
  button.simulate('press');
  expect(props.setPositionById).toHaveBeenCalledTimes(1);
});

it('renders a loading indicator if still fetching predictions', () => {
  const p = { ...props, predictions: { fetching: true } };
  const wrapper = shallow(<LocationSelect {...p} />);
  expect(wrapper.find('ActivityIndicator')).toBeDefined();
});

it('renders an error message in case of fetch error', () => {
  const p = { ...props, predictions: { error: 'error msg' } };
  const wrapper = shallow(<LocationSelect {...p} />);
  expect(wrapper.find('Text').props().children).toBe('error msg');
});

it('tries to fetch predictions when typing a location name', () => {
  const wrapper = shallow(<LocationSelect {...props} />);
  wrapper.find('TextInput').props().onEndEditing({ nativeEvent: { text: 'Ar' } });
  expect(props.fetchPredictions).toHaveBeenCalledTimes(1);
});
