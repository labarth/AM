import { createAction } from 'redux-act';
import { AUTH_PREFIX } from '../constants';
import { SIGN_UP_PREFIX } from './constants';

export const createUserLoading = createAction(`${AUTH_PREFIX}_${SIGN_UP_PREFIX}_create_user_loading`);
export const createUser = createAction(`${AUTH_PREFIX}_${SIGN_UP_PREFIX}_create_user`);
export const createUserError = createAction(`${AUTH_PREFIX}_${SIGN_UP_PREFIX}_create_user_error`);