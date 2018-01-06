//@flow

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { compose, withState } from 'recompose';
import { boundLifecycle } from 'recompose-ext';

import MapView from 'react-native-maps';

import styles from './Styles';

type Region = MapView.propTypes.region;

type Props = {
  position: Region,
  setPosition: (newPos: Region) => void
};

const component = ({ position, setPosition }: Props) => (
  <View style={styles.container}>
    <MapView
      style={StyleSheet.absoluteFillObject}
      region={position}
    />
    <TextInput
      style={styles.input}
      placeholder='¿Qué querés enviar?'
      onChangeText={setPosition}
    />
    <TextInput style={styles.input} placeholder='¿A dónde?' />
  </View>
);

const _onGeoSuccess = ({ position, setPosition }: Props, { coords }) => (
  setPosition({
    ...position,
    latitude: coords.latitude,
    longitude: coords.longitude
  })
);

const _onGeoError = error => console.log(error);

const withGeo = boundLifecycle({
  didMount(props) {
    navigator.geolocation.getCurrentPosition(
      success => _onGeoSuccess(props, success),
      _onGeoError
    );
  }
});

const initialPos = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const HomeScreen = compose(
  withState('position', 'setPosition', initialPos),
  withGeo
)(component);

export default HomeScreen;
