//@flow

import middlewares from 'src/reduxconf/middlewares';
import reduxLogger from 'redux-logger';

it('redux logger in __DEV__', () => {
  expect(__DEV__).toBe(true);
  expect(middlewares()).toContain(reduxLogger);
});

it('no logger in production', () => {
  __DEV__ = false;
  expect(__DEV__).toBe(false);
  expect(middlewares()).toBe([]);
});
