import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { runApplication } from '../../Main/actions';
import { isAuthService } from './service';

function *isAuthSaga() {
  const token = localStorage.getItem('token');

  if (!token) {
    yield put(push('/login'));
  } else {
    yield call(isAuthService, { token });
  }
}


export function* isAuthSagaWatcher() {
  yield takeLatest(runApplication, isAuthSaga);
}