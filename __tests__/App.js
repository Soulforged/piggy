//@flow

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import createStore from 'src/reduxconf';
import actions from 'src/actions';
import App from '../App';

const { login } = actions;
const store = createStore();

it('renders without crashing', () => {
  const rendered = renderer.create(<App store={store} />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('renders home screen on login', () => {
  store.dispatch(login());
  const rendered = renderer.create(<App store={store} />).toJSON();
  expect(rendered).toMatchSnapshot();
});
