//@flow
import { createActions } from 'redux-actions';

import type { Region } from 'ubex/Types';

export default createActions({
  CHANGE_POSITION: (position: Region) => ({ position })
});
