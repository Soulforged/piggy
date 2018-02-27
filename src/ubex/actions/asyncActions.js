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

export const fetchPredictions = (desc: string) => (dispatch: (a: any) => any) => {
  dispatch(requestPredictions(desc));
  return fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${desc}&types=geocode&key=AIzaSyDg3wJ4iMPxJoSNjIhslhGbz85ZOw8T7NE`)
    .then(
      response => response.json(),
      error => dispatch(receivePredictionsError(error.message))
    )
    .then(json => dispatch(receivePredictions(json)));
};

const fetchPlaceDetails = (id: string) => (dispatch: (a: any) => any) => {
  dispatch(requestPlaceDetails(id));
  return fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=AIzaSyDg3wJ4iMPxJoSNjIhslhGbz85ZOw8T7NE`)
    .then(
      response => response.json(),
      error => dispatch(receivePlaceDetailsError(error.message))
    )
    .then(json => dispatch(receivePlaceDetails(json)));
};

export const setPositionById = (id: string) => (dispatch: (a: any) => any, getState: () => any) => (
  dispatch(fetchPlaceDetails(id)).then(() => {
    const { coordinates } = getState().ubex.locations.byIds[id];
    return dispatch(changePosition(coordinates));
  })
);
