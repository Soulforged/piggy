//@flow

import MapView from 'react-native-maps';

export type Region = MapView.propTypes.region;

export type MapProps = {
  position: Region,
  setPosition: (newPos: Region) => void
};

export type Action = {
  type: string
}
