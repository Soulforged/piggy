//@flow
import type { ChangePosition, SetHasError } from 'src/actions/types';
import { CHANGE_POSITION, SET_HAS_ERROR } from 'src/actions/types';

import type { Region, Action } from 'src/Types';

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

export default ((state: State = initialState,
    action: Action | ChangePosition | SetHasError) => {
  switch (action.type) {
  case CHANGE_POSITION:
    return { ...state, position: action.position };
  case SET_HAS_ERROR:
    return { ...state, hasError: action.hasError };
  default:
    return state;
  }
});
