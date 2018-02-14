//@flow
import { createActions } from 'redux-actions';

export default createActions({
  LOGIN: () => ({}),
  SET_ERROR: (error: Error | false) => error,
});
