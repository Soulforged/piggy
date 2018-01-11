//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'src/Types';

export type ChangePosition = {
  position: Region
};

export type SetHasError = {
  hasError: boolean
};

export default const { login, changePosition, setHasError } = createActions({
  'LOGIN',
  'CHANGE_POSITION': (position: Region) => ({ position }),
  'SET_HAS_ERROR': (hasError: boolean) => ({ hasError })
});
