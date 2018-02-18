//@flow
import actions from './actions';

const {
  requestPredictions,
  receivePredictionsError,
  receivePredictions,
  requestPlaceDetails,
  receivePlaceDetailsError,
  receivePlaceDetails,
  setPosition
} = actions;

export const fetchPredictions = desc => dispatch => {
  dispatch(requestPredictions(desc));
  return fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${desc}&types=geocode&key=AIzaSyDg3wJ4iMPxJoSNjIhslhGbz85ZOw8T7NE`)
    .then(
      response => response.json(),
      error => dispatch(receivePredictionsError(error.message))
    )
    .then(json => dispatch(receivePredictions(json)));
};

const fetchPlaceDetails = id => dispatch => {
  dispatch(requestPlaceDetails(id));
  return fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=AIzaSyDg3wJ4iMPxJoSNjIhslhGbz85ZOw8T7NE`)
    .then(
      response => response.json(),
      error => dispatch(receivePlaceDetailsError(error.message))
    )
    .then(json => {
      console.log(json);
      return dispatch(receivePlaceDetails(json))
    });
};

export const setPositionById = id => dispatch => (
  dispatch(fetchPlaceDetails(id))
  .then(() => dispatch(setPosition(getState().locations.byIds[id].geometry.location)))
);
