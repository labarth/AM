import { fork, all } from 'redux-saga/effects';
import { signUpSagaWatcher } from '../Auth/SignUp/saga';
import { loginSagaWatcher } from '../Auth/Login/saga';
import { applicationRunSagaWatcher } from '../common/Application/saga';

export default function* rootSaga() {
  yield all([
    fork(loginSagaWatcher),
    fork(signUpSagaWatcher),
    fork(applicationRunSagaWatcher),
  ]);
};