//@flow

import actions from 'src/actions';

const { login, setHasError } = actions;

it('login to be', () => {
  expect(login()).toEqual({ type: 'LOGIN', payload: {} });
});

it('setHasError to be', () => {
  expect(setHasError(false)).toEqual({
    type: 'SET_HAS_ERROR',
    payload: {
      hasError: false
    }
  });
  expect(setHasError(true)).toEqual({
    type: 'SET_HAS_ERROR',
    payload: {
      hasError: true
    }
  });
});
