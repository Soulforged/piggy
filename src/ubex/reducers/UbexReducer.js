//@flow
import { handleActions } from 'redux-actions';
import actions from 'ubex/actions';

import type { Region } from 'ubex/Types';

type State = {
  position: Region,
}

const { changePosition } = actions;

const initialState = {
  position: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
};

export default handleActions({
  [changePosition](state: State, { position }: State){
    return { ...state, position };
  },
}, initialState);
