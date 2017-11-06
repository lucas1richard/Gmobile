import { createSelector } from 'reselect';

/**
 * Direct selector to the hello state domain
 */
const selectHelloDomain = () => (state) => state.get('hello');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Hello
 */

const makeSelectHello = () => createSelector(
  selectHelloDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHello;
export {
  selectHelloDomain,
};
