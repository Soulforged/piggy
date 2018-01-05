//@flow

import React from 'react';
import { Image, Text } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import styles from './Styles';

import HomeScreen from './HomeScreen';

const menuImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';

const Navigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'HomeScreen',
      drawerIcon: ({ rnNavTintColor }) => (
        <Image
          source={{ uri: menuImg }}
          style={[styles.icon, { tintColor: rnNavTintColor }]}
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
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerTintColor: 'white',
      headerLeft: <Text onPress={() => navigation.navigate('DrawerToggle')}>Menu</Text>
    })
  }
);

export default MainNavigation;
