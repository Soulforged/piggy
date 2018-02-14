//@flow
import { handleActions } from 'redux-actions';
import actions from 'ubex/actions';

import type { Region } from 'ubex/types';

type State = {
  position: Region,
}

const {
  changePosition,
  fetchPredictions,
  requestPredictions,
  receivePredictions,
  receivePredictionsError,
} = actions;

const initialState = {
  position: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  },
  predictions: {
    fetching: true,
    items: []
  }
};

export default handleActions({
  [changePosition](state: State, { payload: { position } }){
    return { ...state, position };
  },
  [requestPredictions](state: State, { payload: { description } }){
    return { ...state, predictions: { fetching: true, items: [] } };
  },
  [receivePredictions](state: State, { payload: { predictions, lastUpdated } }){
    return { ...state, predictions: {
      fetching: false,
      lastUpdated,
      items: locations
    }}
  },
  [receivePredictionsError](state: State, { payload: { error } }){
    return { ...state, predictions: { fetching: false, items: [], error }}
  }
}, initialState);
