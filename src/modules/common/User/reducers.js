import produce from 'immer';
import { createReducer } from 'redux-act';
import { setUser } from './actions';

const defaultState = null;

export default createReducer({
  [setUser]: produce((state, user) => user),
}, defaultState);