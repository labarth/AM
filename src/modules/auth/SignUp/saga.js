import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { createUser, createUserError, createUserLoading } from './actions';
import { createUserService } from './service';

function* signUpSaga({ payload }) {
  try {
    yield put(createUserLoading(true));

    const { confirm, ...userData } = payload;
    const { status } = yield call(createUserService, userData);

    if (status === 200) {
      yield put(push('/login'));
    }

    yield put(createUserLoading(false));
  } catch(error) {
    yield put(createUserLoading(false));
    yield put(createUserError(error));
  }
}

export function* signUpSagaWatcher() {
  yield takeLatest(createUser, signUpSaga);
}