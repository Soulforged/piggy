//@flow

import actions from 'src/actions';

const { login, setHasError } = actions;

it('supports a login action that', () => {
  expect(login()).toEqual({ type: 'LOGIN', payload: {} });
});

it('supports a setHasError action that', () => {
  const example = {
    type: 'SET_HAS_ERROR',
    payload: {
      hasError: false
    }
  };
  expect(setHasError(false)).toEqual(example);
  expect(setHasError(true)).toEqual({ ...example, payload: { hasError: true } });
});
