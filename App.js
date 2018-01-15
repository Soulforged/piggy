//@flow

import React from 'react';
import { Provider } from 'react-redux';

import createStore from 'src/Redux';
import { ErrorBoundary } from 'src/components';
import AppNavigation from 'src/nav';

const store = createStore();

export default () => (
  <Provider store={store}>
    <ErrorBoundary>
      <AppNavigation />
    </ErrorBoundary>
  </Provider>
);
