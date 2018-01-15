//@flow
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { nav, ui } from 'src/reducers';
import { Reducers as ubex } from 'ubex';

const middlewares = () => {
  if (__DEV__) {
    const { logger } = require('redux-logger'); // eslint-disable-line global-require

    return [logger];
  }
  return [];
};

export default () => {
  const rootReducer = combineReducers({ nav, ui, ...ubex });

  return createStore(rootReducer, applyMiddleware(...middlewares));
};
