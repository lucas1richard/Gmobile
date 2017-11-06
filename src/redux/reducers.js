/**
 * reducer js
 * This is where we combine the reducers to pass into the store
 */

import { Record } from 'immutable';
import type { NavigationState } from 'react-navigation/src/TypeDefinition';
import { reducer as form } from 'redux-form/immutable';
// @flow
import { combineReducers } from 'redux-immutable';
import auth from 'containers/Auth/reducer';
import screen from 'containers/Screen/reducer';
import AppNavigator from 'containers/Navigation/AppNavigation';


const navState: NavigationState =
  {
    index: 0,
    routes: [{
      routeName: 'LaunchScreen',
      key: 'LaunchScreen'
    }]
  };

const navRecord = Record(navState);
export type State = typeof navRecordInstance;

const navRecordInstance = navRecord();
const navigationReducer = (state: State = navRecordInstance, action: Object) => state.merge(AppNavigator.router.getStateForAction(action, state.toJS()));

const StateRecord = new Record({
  auth: undefined,
  nav: navRecordInstance,
  screen: undefined,
  form: undefined
});

const reducers = {
  auth,
  nav: navigationReducer,
  screen,
  form
};

export const initialState = new StateRecord();
export type Reducers = typeof combinedReducers;

const combinedReducers = combineReducers(reducers, initialState);
export default combinedReducers;
