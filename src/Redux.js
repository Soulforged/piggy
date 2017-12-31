//@flow
import { combineReducers, createStore, applyMiddleware } from 'redux';
import AppNavigation from './AppNavigation';

const navReducer = (state, action) => {
    const newState = AppNavigation.router.getStateForAction(action, state);
    return newState || state;
  },
  middlewares = [];

if (__DEV__) {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer
  });

  return createStore(rootReducer, applyMiddleware(...middlewares));
};
