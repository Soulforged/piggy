//@flow

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { compose, withState } from 'recompose';

import { errorBoundary } from 'recompose-ext';

type State = {
  hasError: boolean,
  setHasError: ((hasError: boolean): void)
}

const onCatch = (error: Error, info: string, { setHasError }: State) => {
  setHasError(true);
  // You can also log the error to an error reporting service
  console.log(error, info);
};

const component = ({ hasError: boolean, setHasError }) => {
  if (hasError) {
    // You can render any custom fallback UI
    return (
      <View>
        <Text>Something went wrong.</Text>
        <TouchableOpacity onPress={() => setHasError(false)}>
          Close
        </TouchableOpacity>
      </View>
    );
  }
  return props.children;
};

const ErrorBoundary = compose(
  errorBoundary(onCatch),
  withState('hasError', 'setHasError', 0),
  component
);

export default ErrorBoundary;

/*export default class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, info: string) {
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
    return this.props.children;
  }
}*/
