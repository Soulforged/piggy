//@flow
'use strict';

import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

export default class AppNavigator extends React.PureComponent<{}> {
  render(){
    return (
      <View>
        <Navigator />
        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <Image source={require('../assets/imgs/menu.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }

  _onPress(){
    this.props.navigation.navigate('DrawerToggle');
  }
}

const Navigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'HomeScreen',
      displayName: 'HomeScreen',
      drawerIcon: ({ rnNavTintColor }) => (
        <Image
          source={require('../assets/imgs/menu.png')}
          style={[styles.icon, {tintColor: rnNavTintColor}]}
        />
      ),
    }
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});
