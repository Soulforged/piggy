//@flow
import actions from './actions';
import * as asyncActions from './asyncActions';

const merged = { ...actions, ...asyncActions };

export default merged;
