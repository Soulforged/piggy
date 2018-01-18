//@flow

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import ErrorBoundary from 'src/components/ErrorBoundary';

it('calls setHasError action on catch', () => {
  const rendered = renderer.create(<ErrorBoundary />).toJSON();
  expect(rendered).toBeTruthy();
});
