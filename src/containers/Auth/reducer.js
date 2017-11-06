/* @flow */

/**
 *  authReducer reducer
 */
import { Record } from 'immutable';

// Import Action Types
import { LOGIN } from './constants';
import type { Action } from './actions';

const initialState = new Record(({
  loggedIn: false
}: {
  loggedIn: bool
}));

const initialStateInstance = initialState();

export type State = typeof initialStateInstance;

function authReducer(state: State = initialState(), action: Action) {
  switch (action.type) {
    case LOGIN:
      return state.set('loggedIn', '?');
    default:
      return state;
  }
}

export { initialState };

export default authReducer;
