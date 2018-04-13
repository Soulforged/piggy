//@flow
import { placesApi } from 'src/places';
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
  return placesApi.predictions(desc).then(
    predictions => dispatch(receivePredictions(predictions)),
    error => dispatch(receivePredictionsError(error))
  );
};

const fetchPlaceDetails = (id: string) => (dispatch: (a: any) => any) => {
  dispatch(requestPlaceDetails(id));
  return placesApi.place(id).then(
    place => dispatch(receivePlaceDetails(place)),
    error => dispatch(receivePlaceDetailsError(error))
  );
};

export const setPositionById = (id: string) => (dispatch: (a: any) => any, getState: () => any) => (
  dispatch(fetchPlaceDetails(id)).then(() => {
    const { coordinates } = getState().ubex.locations.byIds[id];
    return dispatch(changePosition(coordinates));
  })
);
