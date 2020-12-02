import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { setUser } from 'modules/common/User/actions';
import { setToken } from 'utils/authToken';
import { loginRequest, loginError, loginLoading } from './actions';
import { loginService } from './service';

function* loginSaga({ payload: userData }) {
  try {
    yield put(loginLoading(true));
    const  { data: { user, token } }  = yield call(loginService, userData);

    setToken(token);

    if (user)  {
      yield put(push('/'));
    }

    yield put(setUser(user));
    yield put(loginLoading(false));
  } catch(error) {
    yield put(loginLoading(true));
    yield put(loginError(error));
  }
}

export function* loginSagaWatcher() {
  yield takeLatest(loginRequest, loginSaga);
}