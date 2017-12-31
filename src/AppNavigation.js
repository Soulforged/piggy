//@flow
import { StackNavigator } from 'react-navigation';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';

const routes = {
    Login: { screen: LoginNavigation },
    Main: { screen: MainNavigation }
  },
  config = {
    headerMode: 'none',
    initialRouteName: 'Login'
  };

const AppNavigation = StackNavigator(routes, config);
export default AppNavigation;
