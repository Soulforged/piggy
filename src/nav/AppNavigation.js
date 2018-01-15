//@flow
import { StackNavigator } from 'react-navigation';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';

export default StackNavigator(
  {
    Login: { screen: LoginNavigation },
    Main: { screen: MainNavigation }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);
