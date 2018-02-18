//@flow
import React from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text
} from 'react-native';

import styles from 'src/Styles';

import actions from 'ubex/actions';
import type { MapProps } from 'ubex/types';

const predictionsComponent = ({ predictions, setPositionById }) => {
  if(predictions.fetching){
    return <ActivityIndicator />
  }
  if(predictions.error){
    return <Text>{predictions.error}</Text>
  }
  const renderItem = ({ item }) => (
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
        style={[styles.list, styles.pad]} />
  )
};

export default (props) => (
  <View style={styles.container}>
    <TextInput
      autoFocus
      clearButtonMode='while-editing'
      style={styles.input}
      placeholder='¿A dónde?'
      onEndEditing={(e) => props.fetchPredictions(e.nativeEvent.text)}/>
    {predictionsComponent(props)}
  </View>
);
