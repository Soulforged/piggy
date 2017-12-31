//@flow
'use strict';

import React from 'react';
import { Image, Text } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import styles from './Styles';

import HomeScreen from './HomeScreen';

const Navigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'HomeScreen',
      drawerIcon: ({ rnNavTintColor }) => (
        <Image source={require('../assets/imgs/menu.png')}
          style={[styles.icon, {tintColor: rnNavTintColor}]}
        />
      ),
    }
  },
});

const MainNavigation = StackNavigator(
  {
    Drawer: { screen: Navigator }
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'Welcome!',
      headerTintColor: 'white',
      headerLeft: <Text onPress={navigation.navigate('DrawerOpen')}>Menu</Text>
    })
  });

export default MainNavigation;
