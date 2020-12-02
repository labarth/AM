import { fork, all } from 'redux-saga/effects';
import { signUpSagaWatcher } from 'modules/auth/SignUp/saga';
import { loginSagaWatcher } from 'modules/auth/Login/saga';
import { applicationRunSagaWatcher } from 'modules/common/Application/saga';

export default function* rootSaga() {
  yield all([
    fork(loginSagaWatcher),
    fork(signUpSagaWatcher),
    fork(applicationRunSagaWatcher),
  ]);
};