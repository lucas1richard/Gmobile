
import { fromJS } from 'immutable';
import helloReducer from '../reducer';

describe('helloReducer', () => {
  it('returns the initial state', () => {
    expect(helloReducer(undefined, {})).toEqual(fromJS({}));
  });
});
