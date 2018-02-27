//@flow

import actions from 'ubex/actions';

const {
  receivePredictionsError,
  receivePlaceDetailsError,
  showPredictions,
} = actions;

it('supports requestPredictionsError', () => {
  const payload = { error: 'error' };
  expect(receivePredictionsError(payload.error)).toEqual({ type: 'RECEIVE_PREDICTIONS_ERROR', payload });
});

it('supports requestPlaceDetailsError', () => {
  const payload = { error: 'error' };
  expect(receivePlaceDetailsError(payload.error)).toEqual({ type: 'RECEIVE_PLACE_DETAILS_ERROR', payload });
});

it('supports showPredictions', () => {
  expect(showPredictions()).toEqual({ type: 'SHOW_PREDICTIONS', payload: {} });
});
