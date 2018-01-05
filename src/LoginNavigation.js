//@flow
import { StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

const LoginNavigation = StackNavigator(
  {
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    ForgotPassword: { screen: ForgotPasswordScreen }
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
