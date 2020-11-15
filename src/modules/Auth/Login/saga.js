import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { loginRequest, loginSuccess, loginError, loginLoading } from './actions';
import { loginService } from './service';

function* loginSaga({ payload: userData }) {
  try {
    yield put(loginLoading(true));
    const  { data: { user, token } }  = yield call(loginService, userData);

    localStorage.setItem('token', token);

    if (user)  {
      yield put(push('/'));
    }

    yield put(loginSuccess(user));
    yield put(loginLoading(false));
  } catch(error) {
    yield put(loginLoading(true));
    yield put(loginError(error));
  }
}

export function* loginSagaWatcher() {
  yield takeLatest(loginRequest, loginSaga);
}