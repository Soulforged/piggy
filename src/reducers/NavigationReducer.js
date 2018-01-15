//@flow
import { NavigationActions } from 'react-navigation';
import { handleActions } from 'redux-actions';

import AppNavigation from 'src/nav/AppNavigation';
import actions from 'src/actions';

const { login } = actions;

const stateForAction = (action, state) => (
  AppNavigation.router.getStateForAction(action, state) || state
);

// export default ((state: Object, action: Action) => (
//   handleActions({
//     [login](s) {
//       const goToMain = NavigationActions.reset({
//         index: 0,
//         actions: [
//           NavigationActions.navigate({ routeName: 'Main' })
//         ],
//         key: null
//       });
//       stateForAction(goToMain, s);
//     }
//   }, stateForAction(action, state))
// ))();
// const reducer = handleActions({
//   [login](state) {
//     const goToMain = NavigationActions.reset({
//       index: 0,
//       actions: [
//         NavigationActions.navigate({ routeName: 'Main' })
//       ],
//       key: null
//     });
//     stateForAction(goToMain, state);
//   }
// }, {});

/* FIXME the key = null => root navigator is a limitation of react-navigation
(https://github.com/react-navigation/react-navigation/issues/2670)*/
export default ((state: Object, action: Action) => {
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
  case 'LOGIN':
    return stateForAction(_onLogin(), state);
  default:
    return stateForAction(action, state);
  }
});
