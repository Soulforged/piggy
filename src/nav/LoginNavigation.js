//@flow
import { StackNavigator } from 'react-navigation';
import { LoginScreen } from 'src/screens';

const LoginNavigation = StackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    headerMode: 'float',
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: { backgroundColor: '#E73536' },
      title: 'Welcome',
      headerTintColor: 'white'
    }
  }
);

export default LoginNavigation;
