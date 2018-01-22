//@flow
import { handleActions } from 'redux-actions';
import actions from 'src/actions';

const { setError } = actions;

const initialState = {
  error: false
};

export default handleActions({
  [setError](state, { payload: error }){
    return { ...state, error };
  }
}, initialState);
