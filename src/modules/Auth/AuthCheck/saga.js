import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setUser } from 'modules/common/User/actions';
import { applicationRun } from 'modules/common/Application/actions';
import { isAuthService } from './service';

export function *isAuthSaga() {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      yield put(push('/login'));
    } else {
      const { data: user } = yield call(isAuthService, { token });
      yield put(setUser(user));
    }
  } catch (e) {
    yield put(push('/login'));
  }
}