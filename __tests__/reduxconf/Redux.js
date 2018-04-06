//@flow

import middlewares from 'src/reduxconf/middlewares';
import reduxLogger from 'redux-logger';

it('redux logger if logger activated', () => {
  expect(middlewares({ logActions: true })).toContain(reduxLogger);
});

it('no logger if logger not activated', () => {
  expect(middlewares()).not.toContain(reduxLogger);
});
