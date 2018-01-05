//@flow

import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/Redux';
import ErrorBoundary from './src/ErrorBoundary';
import ReduxNavigation from './src/ReduxNavigation';

const store = createStore();

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ReduxNavigation />
    </Provider>
  </ErrorBoundary>
);

export default App;
