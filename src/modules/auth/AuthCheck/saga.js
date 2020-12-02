import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setUser } from 'modules/common/User/actions';
import { routerLocationSelector } from 'modules/main/selectors';
import { getToken } from 'utils/authToken';
import { isAuthService } from './service';

export function *isAuthSaga() {
  const location = yield select(routerLocationSelector);

  try {
    const token = getToken();

    if (!token && location.pathname !== '/signup') {
      yield put(push('/login'));
    } else {
      const { data: user } = yield call(isAuthService, { token });

      if (location.pathname === '/login' || location.pathname === '/signup') {
        yield put(push('/'));
      }

      yield put(setUser(user));
    }
  } catch (e) {
    if (location.pathname !== '/signup') {
      yield put(push('/login'));
    }
  }
}