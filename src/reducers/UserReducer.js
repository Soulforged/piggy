//@flow
import { handleActions } from 'react-actions';
import { changePosition, setHasError } from 'src/actions';

import type { Region } from 'src/Types';

type State = {
  position: Region,
  hasError: boolean
}

const initialState = {
  position: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  },
  hasError: false
};

export default handleActions({
  [changePosition](state){
    return { ...state, position: action.position }
  },
  [setHasError](state){
    return { ...state, hasError: action.hasError }
  }
}, initialState);
