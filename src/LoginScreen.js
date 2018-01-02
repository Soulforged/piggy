//@flow
'use strict';

import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition';

import styles from './Styles';

type Props = {
  navigation: NavigationScreenProp<{}>
};

type State = {
  +username: string,
  +password: string
};

export default class LoginScreen extends React.PureComponent<Props, State> {
  constructor(props: Props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Usuario'>
        </TextInput>
        <TextInput style={styles.input} placeholder='Password'>
        </TextInput>
        <Button title='Login' onPress={this._onPress.bind(this)} />
      </View>
    );
  }

  /* FIXME the key = null = root navigator is a limitation of react-navigation
  (https://github.com/react-navigation/react-navigation/issues/2670)*/
  _onPress(){
    const resetToMain = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' })
      ],
      key: null
    });
    this.props.navigation.dispatch(resetToMain);
  }
}
