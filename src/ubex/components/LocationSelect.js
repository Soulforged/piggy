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

type PredictionsProps = {
  predictions: any,
  setPositionById: (id: string) => any,
};

type Props = PredictionsProps & {
  fetchPredictions: (desc: string) => any
};

type LocationItem = {
  id: string,
  description: string
};

type Location = {
  item: LocationItem,
};

const predictionsComponent = (props: PredictionsProps) => {
  const { predictions, setPositionById } = props;
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

export default (props: Props) => {
  const { predictions, setPositionById, fetchPredictions } = props;
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        clearButtonMode='while-editing'
        style={styles.input}
        placeholder='¿A dónde?'
        onEndEditing={e => fetchPredictions(e.nativeEvent.text)}
      />
      {predictionsComponent({ predictions, setPositionById })}
    </View>
  );
};
