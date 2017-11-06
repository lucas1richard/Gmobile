// @flow
/**
 * REDUX STORE CONFIG
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers, { initialState } from './reducers';
import type { Store } from '../types/Store';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() : Store {
  // Add saga middleware
  const middlewares = [
    sagaMiddleware
  ];

  const createAppropriateStore = createStore; //eslint-disable-line

  const store = createAppropriateStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
}
