//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'ubex/types';

export default createActions({
  CHANGE_POSITION: (position: Region) => ({ position }),
  REQUEST_PREDICTIONS: (description: string) => ({ description }),
  RECEIVE_PREDICTIONS_ERROR: (error: string) => ({ error }),
  RECEIVE_PREDICTIONS: (predictions: Object) => ({ predictions }),
  REQUEST_PLACE_DETAILS: (id: string) => ({ id }),
  RECEIVE_PLACE_DETAILS_ERROR: (error: string) => ({ error }),
  RECEIVE_PLACE_DETAILS: (details: Object) => ({ details }),
  SHOW_PREDICTIONS: () => ({}),
});
