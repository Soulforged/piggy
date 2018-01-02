//@flow
import { NavigationActions } from 'react-navigation';
import AppNavigation from './AppNavigation';

/* FIXME the key = null = root navigator is a limitation of react-navigation
(https://github.com/react-navigation/react-navigation/issues/2670)*/
export default ((state, action) => {
  const _onLogin = (state) => AppNavigation.router.getStateForAction(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' })
      ],
      key: null
    }), state);
  let newState = state;
  switch (action.type) {
  case 'Login':
    newState = _onLogin(state);
    break;
  default:
    newState = AppNavigation.router.getStateForAction(action, state);
  }
  return newState;
});
