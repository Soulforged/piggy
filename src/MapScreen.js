//@flow
'use strict';

import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.PureComponent {
  static navigationOptions = {
    drawerLabel: 'MapScreen',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/imgs/menu.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

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
      <MapView style={StyleSheet.absoluteFillObject}
        region={this.state.position}/>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  }
});
