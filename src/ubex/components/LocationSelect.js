//@flow
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  View,
  FlatList
} from 'react-native';

import styles from 'src/Styles';

import actions from 'ubex/actions';
import type { MapProps } from 'ubex/types';

const renderItem = ({ item }) => (
  <Text>{ item.description }</Text>
);
const predictionsComponent = ({ predictions }) => {
  if(predictions.fetching){
    return <ActivityIndicator />
  }
  if(predictions.error){
    return <Text>{predictions.error}</Text>
  }
  return <FlatList data={predictions.items} renderItem={renderItem} />
};

export default (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder='¿A dónde?'
      onChangeText={props.fetchPredictions}/>
    {predictionsComponent(props)}
  </View>
);
