//@flow
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import thunkMiddleware from 'redux-thunk';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default ({ logActions }: Object = {}) => {
  const mdws = [thunkMiddleware, navMiddleware];
  if (logActions) {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require

    return [...mdws, logger];
  }
  return mdws;
};
