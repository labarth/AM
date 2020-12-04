import { createSelector } from 'reselect';
import { authState } from 'modules/auth/selectors';

export const signUpSelector = createSelector(
  authState,
  (state) => state.signUp,
)