//@flow

import actions from 'ubex/actions';
import reducer from 'ubex/reducers/UbexReducer';

const {
  changePosition,
  receivePlaceDetails,
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
  locations: {
    byIds: {},
    allIds: []
  },
  predictions: {
    fetching: false,
    items: []
  }
};

it('changes general position on changePosition', () => {
  const position = {
    latitude: 36.78825,
    longitude: -121.4324,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421
  };
  const newState = reducer(initialState, changePosition(position));
  expect(newState).toEqual({ ...initialState, position });
});

it('loads location details on reception', () => {
  const location = {
    place_id: '1',
    formatted_address: 'AR',
    geometry: {
      lat: 12.05,
      lng: 12.05
    }
  };
  const locations = {
    allIds: ['1'],
    byIds: {
      1: {
        description: location.formatted_address,
        coordinates: {
          latitude: location.geometry.lat,
          longitude: location.geometry.lng
        },
        id: '1'
      }
    }
  };
  const newState = reducer(initialState, receivePlaceDetails(location));
  expect(newState).toEqual({ ...initialState, locations });
});

it('loads predictions on reception', () => {
  const obj = {
    predictions: [
      {
        place_id: '1',
        description: 'ar'
      },
      {
        place_id: '2',
        description: 'ar1'
      },
    ]
  };
  const newState = reducer(initialState, receivePredictions(obj));
  expect(newState).toEqual({
    ...initialState,
    predictions: {
      fetching: false,
      items: [
        { id: '1', description: 'ar', key: '1' },
        { id: '2', description: 'ar1', key: '2' }
      ],
      lastUpdated: 1482363367071
    }
  });
});

it('sets fetching predictions when request begins', () => {
  const { predictions } = initialState;
  const newState = reducer(initialState, requestPredictions('ar'));
  expect(newState).toEqual({
    ...initialState,
    predictions: { ...predictions, fetching: true }
  });
});

it('shows error on predictions error', () => {
  const newState = reducer(initialState, receivePredictionsError('error'));
  expect(newState).toEqual({
    ...initialState,
    predictions: { items: [], fetching: false, error: 'error' }
  });
});
