//@flow

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { boundLifecycle } from 'recompose-ext';

import MapView from 'react-native-maps';

import styles from 'src/Styles';

import type { MapProps } from 'ubex/types';

type Props = {
  ...MapProps,
  showPredictions: () => any
};

const component = ({ position, showPredictions }: Props) => (
  <View style={styles.container}>
    <MapView
      style={StyleSheet.absoluteFillObject}
      region={position}
    />
    <TextInput
      style={styles.input}
      placeholder='¿Qué querés enviar?'
    />
    <TextInput
      style={styles.input}
      placeholder='¿A dónde?'
      onFocus={showPredictions}
    />
  </View>
);

const _onGeoSuccess = ({ position, setPosition }: MapProps, { coords }) => (
  setPosition({
    ...position,
    latitude: coords.latitude,
    longitude: coords.longitude
  })
);

const _onGeoError = error => console.log(error);

const withGeo = boundLifecycle({
  didMount(props: MapProps) {
    navigator.geolocation.getCurrentPosition(
      success => _onGeoSuccess(props, success),
      _onGeoError
    );
  }
});

const Map = withGeo(component);

export default Map;
