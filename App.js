//@flow
'use strict';

import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/Redux';
import ErrorBoundary from './src/ErrorBoundary';
import ReduxNavigation from './src/ReduxNavigation';

const store = createStore();

export default class App extends React.PureComponent<{}> {
  render() {
    return(
      <ErrorBoundary>
        <Provider store={store}>
          <ReduxNavigation />
        </Provider>
      </ErrorBoundary>
    );
  }
}
