import produce from 'immer';
import { createReducer } from 'redux-act';
import { createUserError, createUserLoading } from './actions';

const defaultState = {
  loading: false,
  error: '',
}
export const signUpReducer = createReducer({
  [createUserLoading]: produce((state, loading) => {
    state.loading = loading;
  }),
  [createUserError]: produce((state, error) => {
    state.error = error;
  }),
}, defaultState);

