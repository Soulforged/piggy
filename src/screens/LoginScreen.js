//@flow

import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { compose, withState } from 'recompose';

import type { NavigationScreenProp } from 'src/types';

import styles from 'src/Styles';
import actions from 'src/actions';

const { login } = actions;

type Props = {
  navigation: NavigationScreenProp<{}>,
  setUsername: (text: string) => void,
  setPassword: (text: string) => void
};

const component = ({ setUsername, setPassword, navigation }: Props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder='Usuario'
      onChangeText={setUsername}
    />
    <TextInput
      style={styles.input}
      placeholder='Password'
      onChangeText={setPassword}
    />
    <Button title='Login' onPress={() => navigation.dispatch(login())} />
  </View>
);

const LoginScreen = compose(
  withState('username', 'setUsername', ''),
  withState('password', 'setPassword', '')
)(component);

export default LoginScreen;
