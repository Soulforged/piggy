//@flow

import actions from 'ubex/actions';

const { changePosition } = actions;

it('supports a changePosition action that', () => {
  const payload = {
    position: {
      latitude: 36.78825,
      longitude: -121.4324,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.1421
    }
  };
  expect(changePosition(payload.position)).toEqual({ type: 'CHANGE_POSITION', payload });
});
