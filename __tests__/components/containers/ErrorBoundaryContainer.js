//@flow

import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'src/reduxconf';

import actions from 'src/actions';
import { ErrorBoundary } from 'src/components';

const { setError } = actions;
const store = createStore();

const component = () => (
  <Provider store={store} >
    <ErrorBoundary>
      <View />
    </ErrorBoundary>
  </Provider>
);

it('renders succesfully', () => {
  const rendered = renderer.create(component()).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('displays appropriate view on error', () => {
  store.dispatch(setError(new Error('message')));
  const rendered = renderer.create(component()).toJSON();
  expect(rendered).toMatchSnapshot();
});
