//@flow

import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './Styles';

const SignUpScreen = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder='Usuario' />
    <TextInput style={styles.input} placeholder='Password' />
  </View>
);

export default SignUpScreen;
