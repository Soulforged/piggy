//@flow
'use strict';

import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import MapScreen from './src/MapScreen';

export default class App extends React.PureComponent {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = DrawerNavigator({
  Home: {
    screen: MapScreen,
  },
});
