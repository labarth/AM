import produce from 'immer';
import { createReducer } from 'redux-act';
import { applicationLoading } from 'modules/application/actions';

const defaultState = {
  loading: false,
}

export default createReducer({
  [applicationLoading]: produce((state, loading) => { state.loading = loading }),
}, defaultState);