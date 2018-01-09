//@flow
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { nav, user } from 'src/reducers';

const config = () => {
  if (__DEV__) {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require

    return [logger];
  }
  return [];
};

const middlewares = config();

export default () => {
  const rootReducer = combineReducers({ nav, user });

  return createStore(rootReducer, applyMiddleware(...middlewares));
};
