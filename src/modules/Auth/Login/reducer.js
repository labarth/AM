import produce from 'immer';
import { createReducer } from 'redux-act';
import { loginSuccess, loginLoading, loginError } from './actions';

const defaultState = {
  user: null,
  loading: false,
  error: '',
}
export const loginReducer = createReducer({
  [loginSuccess]: produce((state, user) => {
    state.user = user;
  }),
  [loginLoading]: produce((state, loading) => {
    state.loading = loading;
  }),
  [loginError]: produce((state, error) => {
    state.error = error;
  }),
}, defaultState);

