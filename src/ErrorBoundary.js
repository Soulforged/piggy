//@flow
'use strict';

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {};
type State = {
  hasError: boolean
};

export default class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View>
          <Text>Something went wrong.</Text>
          <TouchableOpacity onPress={() => this.setState({ hasError: false })}>
            Close
          </TouchableOpacity>
        </View>
      );
    }
    return false;
  }
}
