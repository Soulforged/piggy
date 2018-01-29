//@flow
import React from 'react';
import { BackHandler } from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import createStore from 'src/reduxconf';

import ReduxNavigation from 'src/nav/ReduxNavigation';

const mockStore = configureStore([]);
const initialState = {
  nav: {
    index: 0,
    routes: [
      {
        index: 0,
        routeName: 'Login',
        key: 'Init-id-1482363367071-4',
        routes: [
          {
            type: undefined,
            routeName: 'Login',
            key: 'Init-id-1482363367071-4'
          },
          {
            type: undefined,
            routeName: 'Main',
            key: 'Init-id-1482363367071-6'
          }
        ]
      },
      {
        index: 1,
        routeName: 'Main',
        key: 'Init-id-1482363367071-6',
        routes: [
          {
            type: undefined,
            routeName: 'Drawer',
            key: 'Init-id-1482363367071-7'
          }
        ]
      }
    ]
  }
};
const store = mockStore(initialState);
// const store = createStore();

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
  // const nav = { ...initialState.nav, index: 1 };
  // const store1 = mockStore({ ...initialState, nav });
  // const component1 = (
  //   <Provider store={store1}>
  //     <ReduxNavigation />
  //   </Provider>
  // );
  // renderer.create(component1).toJSON();
  // expect(store.getState().nav.index).toBe(1);
  // BackHandler.mockPressBack();
  // expect(store.getState().nav.index).toBe(0);
  // expect(store.getState().nav.routes[0].routeName).toBe('Login');
});
