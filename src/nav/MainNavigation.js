//@flow

import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from 'src/screens';

const Navigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'HomeScreen',
      drawerIcon: ({ rnNavTintColor }) => (
        <Icon name='md-menu' size={30} color={rnNavTintColor} />
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
      headerLeft: (
        <Icon.Button
          name='md-menu'
          size={30}
          color='white'
          onPress={() => navigation.navigate('DrawerToggle')}
        />
      )
    })
  }
);

export default MainNavigation;
