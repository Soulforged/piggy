//@flow
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default () => {
  if (__DEV__) {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require

    return [logger, navMiddleware];
  }
  return [navMiddleware];
};
