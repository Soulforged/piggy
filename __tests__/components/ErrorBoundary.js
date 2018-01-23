//@flow
import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import ErrorBoundary from 'src/components/ErrorBoundary';

const component = props => (
  <ErrorBoundary {...props}>
    <View style={1 / 0} />
  </ErrorBoundary>
);

it('renders without crashing', () => {
  const setError = jest.fn();
  const rendered = renderer.create(component({ setError })).toJSON();
  expect(rendered).toMatchSnapshot();
});
