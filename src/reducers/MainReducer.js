//@flow
import { handleActions } from 'redux-actions';
import { setHasError } from 'src/actions';

type State = {
  hasError: boolean
}

const initialState = {
  hasError: false
};

export default handleActions({
  [setHasError](state, { hasError }: State){
    return { ...state, hasError };
  }
}, initialState);
