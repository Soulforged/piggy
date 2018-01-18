//@flow

import actions from 'ubex/actions';
import reducer from 'ubex/reducers/UbexReducer';

const { changePosition } = actions;

const initialState = {
  position: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
};

it('changes general position on changePosition', () => {
  const position = {
    latitude: 36.78825,
    longitude: -121.4324,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421
  };
  const newState = reducer(initialState, changePosition(position));
  expect(newState).toEqual({ ...initialState, position });
});
