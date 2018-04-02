//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'ubex/types';

/* eslint-disable camelcase */
const prediction = ({ place_id, description }) => ({
  id: place_id,
  description,
  key: place_id
});

const receivePredictions = (json: Object) => ({
  predictions: json.predictions.map(prediction),
  lastUpdated: Date.now()
});

const receivePlaceDetails = ({ place_id, formatted_address, geometry }: Object) => ({
  id: place_id,
  description: formatted_address,
  coordinates: {
    latitude: geometry.lat,
    longitude: geometry.lng
  }
});
/* eslint-disable */

export default createActions({
  CHANGE_POSITION: (position: Region) => ({ position }),
  REQUEST_PREDICTIONS: (description: string) => ({ description }),
  RECEIVE_PREDICTIONS_ERROR: (error: string) => ({ error }),
  RECEIVE_PREDICTIONS: receivePredictions,
  REQUEST_PLACE_DETAILS: (id: string) => ({ id }),
  RECEIVE_PLACE_DETAILS_ERROR: (error: string) => ({ error }),
  RECEIVE_PLACE_DETAILS: receivePlaceDetails,
  SHOW_PREDICTIONS: () => ({}),
});
