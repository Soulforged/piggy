//@flow
'use strict';

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import MapView from 'react-native-maps';

export default class SecondScreen extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      position: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this._onGeoSuccess.bind(this),
      this._onGeoError);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={StyleSheet.absoluteFillObject}
          region={this.state.position}/>
        <TextInput style={styles.input} placeholder='¿Qué querés enviar?'>
        </TextInput>
        <TextInput style={styles.input} placeholder='¿A dónde?'>
        </TextInput>
      </View>
    );
  }

  _onGeoSuccess({coords}){
    this.setState({position: {...this.state.position,
      latitude: coords.latitude,
      longitude: coords.longitude
    }});
  }

  _onGeoError(error){
    console.log(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 44,
    backgroundColor: 'white',
    margin: 10
  }
});
