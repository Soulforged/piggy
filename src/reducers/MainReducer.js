//@flow
import { handleActions } from 'redux-actions';
import actions from 'src/actions';

type State = {
  hasError: boolean
}

const { setHasError } = actions;

const initialState = {
  hasError: false
};

export default handleActions({
  [setHasError](state, { hasError }: State){
    return { ...state, hasError };
  }
}, initialState);
