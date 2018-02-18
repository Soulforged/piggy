//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'ubex/types';

const receivePredictions = (json: Object) => ({
  predictions: json.predictions.map( ({place_id, description}) => (
    { id: place_id, description, key: place_id }
  )),
  lastUpdated: Date.now()
});

export default createActions({
  CHANGE_POSITION: (position: Region) => ({ position }),
  REQUEST_PREDICTIONS: (description: string) => ({ description }),
  RECEIVE_PREDICTIONS_ERROR: (error: string) => ({ error }),
  RECEIVE_PREDICTIONS: receivePredictions,
  REQUEST_PLACE_DETAILS: (id: string) => ({ id }),
  RECEIVE_PLACE_DETAILS_ERROR: (error: string) => ({ error }),
  RECEIVE_PLACE_DETAILS: (json: Object) => json.result,
  SHOW_PREDICTIONS: () => ({}),
});
