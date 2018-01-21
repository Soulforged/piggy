//@flow
import React from 'react';
import { BackHandler } from 'react-native';
import * as ReactNavigation from 'react-navigation';
import { Action, ThunkAction, PromiseAction, connect } from 'react-redux';
import { boundLifecycle } from 'recompose-ext';

import type { NavigationState } from 'src/types';

import AppNavigation from './AppNavigation';

type Props = {
  dispatch: (action: Action | ThunkAction | PromiseAction) => any,
  nav: NavigationState
};

const component = ({ dispatch, nav }: Props) => {
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  });

  return <AppNavigation navigation={navigation} />;
};

const _onBackPress = ({ dispatch, nav }) => {
  if (nav.index === 0) {
    return false;
  }
  dispatch(ReactNavigation.NavigationActions.back());
  return true;
};

const withAndroidHandlers = boundLifecycle({
  didMount(props) {
    BackHandler.addEventListener('hardwareBackPress', _onBackPress.bind(props));
  },

  willUnmount(props) {
    BackHandler.removeEventListener('hardwareBackPress', _onBackPress.bind(props));
  }
});

const ReduxNavigation = withAndroidHandlers(component);

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
