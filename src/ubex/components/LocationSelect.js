//@flow
import React from 'react';
import {
  ActivityIndicator,
  Button,
  TextInput,
  View,
  FlatList,
  Text
} from 'react-native';

import styles from 'src/Styles';

type Props = {
  predictions: any,
  setPositionById: (id: string) => any,
  fetchPredictions: (desc: string) => any
};

type LocationItem = {
  id: string,
  description: string
};

type Location = {
  item: LocationItem,
};

const predictionsComponent = ({ predictions, setPositionById }: Props) => {
  if (predictions.fetching){
    return <ActivityIndicator />;
  }
  if (predictions.error){
    return <Text>{predictions.error}</Text>;
  }
  const renderItem = ({ item }: Location) => (
    <Button
      title={item.description}
      style={[styles.listItem, styles.pad]}
      onPress={() => setPositionById(item.id)}
    />
  );
  return (
    <FlatList
      data={predictions.items}
      renderItem={renderItem}
      style={[styles.list, styles.pad]}
    />
  );
};

export default (props: Props) => (
  <View style={styles.container}>
    <TextInput
      autoFocus
      clearButtonMode='while-editing'
      style={styles.input}
      placeholder='¿A dónde?'
      onEndEditing={e => props.fetchPredictions(e.nativeEvent.text)}
    />
    {predictionsComponent(props)}
  </View>
);
