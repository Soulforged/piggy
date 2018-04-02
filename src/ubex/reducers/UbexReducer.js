//@flow
import { handleActions } from 'redux-actions';
import actions from 'ubex/actions';

import type { UbexState as State } from 'ubex/types';

const {
  changePosition,
  requestPredictions,
  receivePredictions,
  receivePredictionsError,
  receivePlaceDetails,
} = actions;

const initialState = {
  position: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  },
  predictions: {
    fetching: false,
    items: []
  },
  locations: {
    byIds: {},
    allIds: []
  }
};

export default handleActions({
  [changePosition](state: State, { payload: { position } }){
    return { ...state, position: { ...state.position, ...position } };
  },
  [requestPredictions](state: State){
    return { ...state, predictions: { fetching: true, items: [] } };
  },
  [receivePredictions](state: State, { payload: { predictions, lastUpdated } }){
    return {
      ...state,
      predictions: {
        fetching: false,
        lastUpdated,
        items: predictions
      }
    };
  },
  [receivePredictionsError](state: State, { payload: { error } }){
    return { ...state, predictions: { fetching: false, items: [], error } };
  },
  [receivePlaceDetails](state: State, { payload: details }){
    const { locations } = state;
    const allIds = [...locations.allIds, details.id];
    const byIds = {
      ...locations.byIds,
      [details.id]: details
    };
    return { ...state, locations: { allIds, byIds } };
  },
}, initialState);
