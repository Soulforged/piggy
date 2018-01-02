//@flow
import React from 'react';
import { BackHandler } from 'react-native';
import * as ReactNavigation from 'react-navigation';
import { Action, ThunkAction, PromiseAction, connect } from 'react-redux';
import AppNavigation from './AppNavigation';

type Props = {
  dispatch: (action: Action | ThunkAction | PromiseAction) => any,
  nav: Object
};

class ReduxNavigation extends React.Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress.bind(this));
  }

  render() {
    const { dispatch, nav } = this.props;
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <AppNavigation navigation={navigation} />;
  }

  _onBackPress() {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(ReactNavigation.NavigationActions.back());
    return true;
  }

}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
