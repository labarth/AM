import produce from 'immer';
import { createReducer } from 'redux-act';
import { applicationLoading } from './actions';

const defaultState = {
  loading: false,
}

export default createReducer({
  [applicationLoading]: produce((state, loading) => { console.log(loading); state.loading = loading }),
}, defaultState);