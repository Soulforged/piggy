//@flow

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { boundLifecycle } from 'recompose-ext';

type ErrorState = Error | false;

type Props = {
  children: React.Node,
  error: ErrorState,
  setError: (error: ErrorState) => void
};

const onCatch = (error: Error, info: string, { setError }: Props) => {
  // You can also log the error to an error reporting service
  console.log(error);
  setError(error);
};

const component = ({ error, setError, children }: Props) => {
  if (error) {
    // You can render any custom fallback UI
    return (
      <View>
        <Text>{error.message}</Text>
        <Button title='Close' onPress={() => setError(false)} />
      </View>
    );
  }
  return children;
};

export default boundLifecycle({ onCatch })(component);
