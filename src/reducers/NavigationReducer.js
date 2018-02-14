//@flow
import { NavigationActions } from 'react-navigation';

import AppNavigation from 'src/nav/AppNavigation';
import actions from 'src/actions';
import ubexActions from 'ubex/actions';

import type { NavigationAction, NavigationState } from 'src/types';

const { login } = actions;
const { showPredictions } = ubexActions;

/* FIXME the key = null => root navigator is a limitation of react-navigation
(https://github.com/react-navigation/react-navigation/issues/2670)*/
export default ((state: NavigationState, action: NavigationAction) => {
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

  const loginType = login().type;
  const showPredictionsType = showPredictions().type;
  switch (action.type) {
  case showPredictionsType:
    return stateForAction(NavigationActions.navigate({
      routeName: 'LocationSelect'
    }), state);
  case loginType:
    return stateForAction(_onLogin(), state);
  default:
    return stateForAction(action, state);
  }
});
