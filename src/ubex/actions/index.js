//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'ubex/types';

export default createActions({
  CHANGE_POSITION: (position: Region) => ({ position })
});
