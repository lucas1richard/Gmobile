// @flow
import type {
  /* eslint-disable import/named */
  Store as ReduxStore,
  Dispatch as ReduxDispatch
} from 'redux';
import type { Action } from 'containers/Auth/actions';
import type { State } from './State';

export type Store = ReduxStore<State, Action>;

export type GetState = () => State;

export type Dispatch =
  & ReduxDispatch<Action>
