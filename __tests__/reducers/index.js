//@flow

import actions from 'src/actions';
import { nav, ui } from 'src/reducers';

const { login, setHasError } = actions;

it('navigates to main on login success', () => {
  const newState = nav({}, login());
  expect(newState.index).toBe(0);
  expect(newState.routes[0].routeName).toBe('Main');
});

it('enters error state when setHasError(true)', () => {
  const newState = ui({ hasError: false }, setHasError(true));
  expect(newState).toEqual({ hasError: true });
});

it('restores from error when setHasError(false)', () => {
  const newState = ui({ hasError: true }, setHasError(false));
  expect(newState).toEqual({ hasError: false });
});
