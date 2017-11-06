// @flow
/**
 * Action Creators for Auth reducer
**/

import { LOGIN } from './constants';

type LoginAction = {
  type: string;
  email: string;
  password: string;
}

/**
 * Export all action types
 */
export type Action =
| LoginAction

export function login(email: string, password: string) : LoginAction {
  return {
    type: LOGIN,
    email,
    password
  };
}
