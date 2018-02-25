//@flow

import actions from 'ubex/actions';

const {
  changePosition,
  requestPredictions,
  requestPredictionsError,
  receivePredictions,
  requestPlaceDetails,
  requestPlaceDetailsError,
  receivePlaceDetails,
  showPredictions,
} = actions;

const latLong = {
  latitude: 36.78825,
  longitude: -121.4324,
};

it('supports a changePosition action that', () => {
  const payload = {
    position: {
      ...latLong,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.1421
    }
  };
  expect(changePosition(payload.position)).toEqual({ type: 'CHANGE_POSITION', payload });
});

it('supports requestPredictions', () => {
  const payload = { description: 'desc' };
  expect(requestPredictions(payload.description)).toEqual({ type: 'REQUEST_PREDICTIONS', payload });
});

it('supports requestPredictionsError', () => {
  const payload = { error: 'error' };
  expect(requestPredictionsError(payload.description)).toEqual({ type: 'REQUEST_PREDICTIONS_ERROR', payload });
});

it('supports receivePredictions', () => {
  const predictions = [
    { place_id: '1', description: 'desc' },
    { place_id: '2', description: 'desc1' },
  ];
  const payload = {
    predictions: [
      { id: '1', description: 'desc', key: '1' },
      { id: '2', description: 'desc1', key: '2' },
    ],
    lastUpdated: Date.now()
  };
  expect(receivePredictions(predictions)).toEqual({ type: 'RECEIVE_PREDICTIONS', payload });
});

it('supports requestPlaceDetails', () => {
  const payload = { id: '1' };
  expect(requestPlaceDetails(payload.id)).toEqual({ type: 'REQUEST_PLACE_DETAILS', payload });
});

it('supports requestPlaceDetailsError', () => {
  const payload = { error: 'error' };
  expect(requestPlaceDetailsError(payload.description)).toEqual({ type: 'REQUEST_PLACE_DETAILS_ERROR', payload });
});

it('supports receivePlaceDetails', () => {
  const details = {
    result: {
      geometry: {
        location: latLong
      }
    }
  };
  const payload = details.result;
  expect(receivePlaceDetails(details)).toEqual({ type: 'RECEIVE_PLACE_DETAILS', payload });
});

it('supports showPredictions', () => {
  expect(showPredictions()).toEqual({ type: 'SHOW_PREDICTIONS' });
});
