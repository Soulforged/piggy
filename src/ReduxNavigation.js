//@flow
import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { Action, ThunkAction, PromiseAction, connect } from 'react-redux';
import AppNavigation from './AppNavigation';

type Props = {
  dispatch: (action: Action | ThunkAction | PromiseAction) => any,
  nav: Object
};

const ReduxNavigation = (props: Props) => {
  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  });

  return (<AppNavigation navigation={navigation} />);
};

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
