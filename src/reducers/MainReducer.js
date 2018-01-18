//@flow
import { handleActions } from 'redux-actions';
import actions from 'src/actions';

const { setHasError } = actions;

const initialState = {
  hasError: false
};

export default handleActions({
  [setHasError](state, { payload: { hasError } }){
    return { ...state, hasError };
  }
}, initialState);
