import { createAction } from 'redux-act';
import { AUTH_PREFIX } from 'modules/auth/constants';
import { LOGIN_PREFIX } from 'modules/auth/containers/Login/constants';

export const loginRequest = createAction(`${AUTH_PREFIX}_${LOGIN_PREFIX}_request`);
export const loginError = createAction(`${AUTH_PREFIX}_${LOGIN_PREFIX}_error`);
export const loginLoading = createAction(`${AUTH_PREFIX}_${LOGIN_PREFIX}_loading`);