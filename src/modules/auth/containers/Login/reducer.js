import produce from 'immer';
import { createReducer } from 'redux-act';
import { loginLoading, loginError } from 'modules/auth/containers/Login/actions';

const defaultState = {
  loading: false,
  error: '',
}
export const loginReducer = createReducer({
  [loginLoading]: produce((state, loading) => {
    state.loading = loading;
  }),
  [loginError]: produce((state, error) => {
    state.error = error;
  }),
}, defaultState);

