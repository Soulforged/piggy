//@flow

import MapView from 'react-native-maps';

export type Region = MapView.propTypes.region;

export type MapProps = {
  position: Region,
  setPosition: (newPos: Region) => void
};

export type Predictions = {
  fetching: boolean,
  items: [any]
};

export type Locations = {
  byIds: Object,
  allIds: [string]
};

export type UbexState = {
  ...MapProps,
  predictions: Predictions,
  locations: Locations
}

export type State = {
  ubex: UbexState
};
