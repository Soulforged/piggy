//@flow

import actions from 'src/actions';

const { login, setError } = actions;

it('supports a login action that', () => {
  expect(login()).toEqual({ type: 'LOGIN', payload: {} });
});

it('supports a setError action that', () => {
  const example = {
    type: 'SET_ERROR',
    payload: false
  };
  expect(setError(false)).toEqual(example);
  const error = { message: 'error' };
  expect(setError(error)).toEqual({ ...example, payload: error });
});
