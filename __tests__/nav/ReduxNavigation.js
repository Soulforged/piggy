//@flow
import React from 'react';
import { BackHandler } from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'src/reduxconf';
import actions from 'src/actions';

import ReduxNavigation from 'src/nav/ReduxNavigation';

const { login } = actions;

const store = createStore();

it('handles back press', () => {
  const component = (
    <Provider store={store}>
      <ReduxNavigation />
    </Provider>
  );
  renderer.create(component).toJSON();
  BackHandler.mockPressBack();
  expect(store.getState().nav.index).toBe(0);
  expect(store.getState().nav.routes[0].routeName).toBe('Login');
  store.dispatch(login());
  expect(store.getState().nav.index).toBe(0);
  expect(store.getState().nav.routes[0].routeName).toBe('Main');
  //TODO test the real back press, maybe with drawer
});
