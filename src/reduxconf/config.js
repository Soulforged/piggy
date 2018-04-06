//@flow
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { nav, ui } from 'src/reducers';
import { Reducers as ubex } from 'ubex';
import middlewares from './middlewares';

export default (config: Object = {}) => {
  const rootReducer = combineReducers({ nav, ui, ...ubex });
  const mdws = middlewares(config);

  return createStore(rootReducer, applyMiddleware(...mdws));
};
