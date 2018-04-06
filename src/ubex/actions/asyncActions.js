//@flow
import places from 'src/places';
import actions from './actions';

const {
  requestPredictions,
  // receivePredictionsError,
  receivePredictions,
  requestPlaceDetails,
  // receivePlaceDetailsError,
  receivePlaceDetails,
  changePosition
} = actions;

export const fetchPredictions = (desc: string) => (dispatch: (a: any) => any) => {
  dispatch(requestPredictions(desc));
  return places().predictions(desc).then(predictions => dispatch(receivePredictions(predictions)));
};

const fetchPlaceDetails = (id: string) => (dispatch: (a: any) => any) => {
  dispatch(requestPlaceDetails(id));
  return places().place(id).then(place => dispatch(receivePlaceDetails(place)));
};

export const setPositionById = (id: string) => (dispatch: (a: any) => any, getState: () => any) => (
  dispatch(fetchPlaceDetails(id)).then(() => {
    const { coordinates } = getState().ubex.locations.byIds[id];
    return dispatch(changePosition(coordinates));
  })
);
