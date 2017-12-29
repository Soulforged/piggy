//@flow
'use strict';

import React from 'react';
import ErrorBoundary from './src/ErrorBoundary';
import AppNavigator from './src/AppNavigator';

export default class App extends React.PureComponent<{}> {
  render() {
    return(
      <ErrorBoundary>
        <AppNavigator />
      </ErrorBoundary>
    );
  }
}
