//@flow
'use strict';

import React from 'react';
import { TextInput, View, Button } from 'react-native';

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

  _onPress(){
    this.props.navigation.navigate('Main');
  }
}
