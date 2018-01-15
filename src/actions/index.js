//@flow
import { createActions } from 'redux-actions';

export default createActions({
  LOGIN: () => ({}),
  SET_HAS_ERROR: (hasError: boolean) => ({ hasError })
});
