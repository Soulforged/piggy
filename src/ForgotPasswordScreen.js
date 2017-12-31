//@flow
'use strict';

import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './Styles';

type Props = {};

type State = {
  username: string,
  password: string
};

export default class ForgotPasswordScreen extends React.PureComponent<Props, State> {
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
      </View>
    );
  }
}
