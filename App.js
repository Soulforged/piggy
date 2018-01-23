//@flow

import React from 'react';
import { Provider } from 'react-redux';

import createStore from 'src/reduxconf';
import { ErrorBoundary } from 'src/components';
import AppNavigation from 'src/nav';

import type { Store } from 'redux';

type Props = {
  store?: Store
}

const App = (props: Props) => (
  <Provider store={props.store}>
    <ErrorBoundary>
      <AppNavigation />
    </ErrorBoundary>
  </Provider>
);

App.defaultProps = {
  store: createStore()
};

export default App;
