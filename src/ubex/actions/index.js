//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'ubex/types';

const requestPredictions = (description: string) => ({ description });
const requestPredictionsError = (error: string) => ({ error });
const receivePredictions = (json: Object) => ({
  predictions: json.predictions.map({place_id, description} => (
    {id: place_id, description }
  )),
  lastUpdated: Date.now()
});

const fetchPredictions = (desc) => (
  (dispatch) => {
    dispatch(requestPredictions(desc));
    return fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${desc}'
      + '&types=geocode&key=AIzaSyDg3wJ4iMPxJoSNjIhslhGbz85ZOw8T7NE')
      .then(
        response => response.json(),
        error => dispatch(requestPredictionsError(error.message))
      )
      .then(json => dispatch(receivePredictions(json)))
  }
);

export default createActions({
  CHANGE_POSITION: (position: Region) => ({ position }),
  FETCH_PREDICTIONS: fetchLocations,
  REQUEST_PREDICTIONS: requestPredictions,
  RECEIVE_PREDICTIONS: receivePredictions,
  RECEIVE_PREDICTIONS_ERROR: requestPredictionsError,
  SHOW_PREDICTIONS: () => ({}),
});
