import { takeLatest, call, put } from 'redux-saga/effects';
import { isAuthSaga } from 'modules/auth/AuthCheck/saga';
import { applicationLoading, applicationRun } from './actions';


function *applicationRunSaga() {
  try {
    yield put(applicationLoading(true));
    yield call(isAuthSaga);
    yield put(applicationLoading(false));
  } catch (e) {
    yield put(applicationLoading(false));
  }
}

export function *applicationRunSagaWatcher() {
  yield takeLatest(applicationRun, applicationRunSaga);
}