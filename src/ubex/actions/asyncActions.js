//@flow
import actions from './actions';

const {
  requestPredictions,
  receivePredictionsError,
  receivePredictions,
  requestPlaceDetails,
  receivePlaceDetailsError,
  receivePlaceDetails,
  changePosition
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

export const setPositionById = id => (dispatch, getState) => (
  dispatch(fetchPlaceDetails(id)).then(() => {
    const location = getState().ubex.locations.byIds[id].geometry.location;
    dispatch(changePosition(location))
  })
);
