//@flow
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import thunkMiddleware from 'redux-thunk';
import { apiFactory } from 'redux-ext';
import config from 'src/config';

const {
  placesApi
} = config.endpoints;

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default ({ logActions }: Object = {}) => {
  const mdws = [thunkMiddleware, navMiddleware, apiFactory(placesApi)];
  if (logActions) {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require

    return [...mdws, logger];
  }
  return mdws;
};
