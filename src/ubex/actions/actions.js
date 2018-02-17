//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'ubex/types';

const receivePredictions = (json: Object) => ({
  predictions: json.predictions.map( ({place_id, description}) => (
    { id: place_id, description }
  )),
  lastUpdated: Date.now()
});

export default createActions({
  CHANGE_POSITION: (position: Region) => ({ position }),
  REQUEST_PREDICTIONS: (description: string) => ({ description }),
  RECEIVE_PREDICTIONS: receivePredictions,
  RECEIVE_PREDICTIONS_ERROR: (error: string) => ({ error }),
  SHOW_PREDICTIONS: () => ({}),
});
