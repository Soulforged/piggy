//@flow

import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { compose, withState } from 'recompose';

import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition';

import styles from './Styles';

type Props = {
  navigation: NavigationScreenProp<{}>,
  setUsername: (text: string) => void,
  setPassword: (text: string) => void
};

const component = ({ setUsername, setPassword, navigation }: Props) => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder='Usuario' onChangeText={setUsername} />
    <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} />
    <Button title='Login' onPress={() => navigation.dispatch({ type: 'Login' })} />
  </View>
);

const LoginScreen = compose(
  withState('username', 'setUsername', ''),
  withState('password', 'setPassword', '')
)(component);

export default LoginScreen;
