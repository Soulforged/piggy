//@flow
import { NavigationActions } from 'react-navigation';
import AppNavigation from './AppNavigation';

/* FIXME the key = null => root navigator is a limitation of react-navigation
(https://github.com/react-navigation/react-navigation/issues/2670)*/
export default ((state, action) => {
  const _onLogin = () => (
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' })
      ],
      key: null
    })
  );
  const stateForAction = (a, s) => (
    AppNavigation.router.getStateForAction(a, s) || s
  );

  switch (action.type) {
  case 'Login':
    return stateForAction(_onLogin(), state);
  default:
    return stateForAction(action, state);
  }
});
