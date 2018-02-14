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

const { fetchPredictions } = actions;
const renderPred = { item } => (

);
const predictionsComponent = ({ predictions }) => {
  if(predictions.fetching){
    return <ActivityIndicator />
  }
  return <FlatList data={predictions.items} renderItem={renderPred} />
};

export default ({ predictions, fetchPredictions }) => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder='¿A dónde?' />

  </View>
);
