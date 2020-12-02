import { createSelector } from 'reselect';
import { authState } from '../selectors';

export const signUpSelector = createSelector(
  authState,
  (state) => state.signUp,
)