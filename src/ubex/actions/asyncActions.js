//@flow
import actions from './actions';

const {
  requestPredictions,
  requestPredictionsError,
  receivePredictions
} = actions;

export const fetchPredictions = desc => dispatch => {
  dispatch(requestPredictions(desc));
  return fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${desc}'
    + '&types=geocode&key=AIzaSyDg3wJ4iMPxJoSNjIhslhGbz85ZOw8T7NE')
    .then(
      response => response.json(),
      error => dispatch(requestPredictionsError(error.message))
    )
    .then(json => dispatch(receivePredictions(json)))
};
