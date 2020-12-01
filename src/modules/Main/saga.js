import { fork } from 'redux-saga/effects';
import { signUpSagaWatcher } from '../Auth/SignUp/saga';
import { loginSagaWatcher } from '../Auth/Login/saga';
import { isAuthSagaWatcher } from '../Auth/AuthCheck/saga';

export default function* watchAll() {
  yield fork(loginSagaWatcher);
  yield fork(signUpSagaWatcher);
  yield fork(isAuthSagaWatcher);
};