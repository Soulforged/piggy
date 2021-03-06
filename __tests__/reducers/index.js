//@flow

import actions from 'src/actions';
import { nav, ui } from 'src/reducers';

const { login, setError } = actions;

it('navigates to main on login success', () => {
  const newState = nav({}, login());
  expect(newState.index).toBe(0);
  expect(newState.routes[0].routeName).toBe('Main');
});

it('enters error state when setError(error)', () => {
  const error = new Error('message');
  const newState = ui({ error: false }, setError(error));
  expect(newState).toEqual({ error });
});

it('restores from error when setError(false)', () => {
  const newState = ui({ error: {} }, setError(false));
  expect(newState).toEqual({ error: false });
});
