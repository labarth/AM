import { fork, all } from 'redux-saga/effects';
import { signUpSagaWatcher } from 'modules/auth/containers/SignUp/saga';
import { loginSagaWatcher } from 'modules/auth/containers/Login/saga';
import { applicationRunSagaWatcher } from 'modules/application/saga';

export default function* rootSaga() {
  yield all([
    fork(loginSagaWatcher),
    fork(signUpSagaWatcher),
    fork(applicationRunSagaWatcher),
  ]);
};