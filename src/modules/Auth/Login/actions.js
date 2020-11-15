import { createAction } from 'redux-act';
import { AUTH_PREFIX } from '../constants';
import { LOGIN_PREFIX } from './constants';

export const loginRequest = createAction(`${AUTH_PREFIX}_${LOGIN_PREFIX}_request`);
export const loginSuccess = createAction(`${AUTH_PREFIX}_${LOGIN_PREFIX}_success`);
export const loginError = createAction(`${AUTH_PREFIX}_${LOGIN_PREFIX}_error`);
export const loginLoading = createAction(`${AUTH_PREFIX}_${LOGIN_PREFIX}_loading`);