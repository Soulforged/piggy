//@flow
import { StackNavigator } from 'react-navigation';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';

const AppNavigation = StackNavigator({
  Login: { screen: LoginNavigation },
  Main: { screen: MainNavigation }
},
{
  headerMode: 'none',
  initialRouteName: 'Login'
});
export default AppNavigation;
