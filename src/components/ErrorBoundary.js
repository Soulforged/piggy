//@flow

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { boundLifecycle } from 'recompose-ext';

type Props = {
  children: React.Node,
  hasError: boolean,
  setHasError: (hasError: boolean) => void
};

const onCatch = (error: Error, info: string, { setHasError }: Props) => {
  // You can also log the error to an error reporting service
  console.log(error);
  console.log(info);
  setHasError(true);
};

const component = ({ hasError, setHasError, children }: Props) => {
  if (hasError) {
    // You can render any custom fallback UI
    return (
      <View>
        <Text>Something went wrong.</Text>
        <Button title='Close' onPress={() => setHasError(false)} />
      </View>
    );
  }
  return children;
};

export default boundLifecycle({ onCatch })(component);
