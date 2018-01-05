//@flow
import { combineReducers, createStore, applyMiddleware } from 'redux';
import NavigationReducer from './NavigationReducer';

const middlewares = [];

if (__DEV__) {
  const { logger } = require('redux-logger'); // eslint-disable-line global-require

  middlewares.push(logger);
}

export default () => {
  const rootReducer = combineReducers({
    nav: NavigationReducer
  });

  return createStore(rootReducer, applyMiddleware(...middlewares));
};
