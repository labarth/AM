import { combineReducers } from 'redux';
import AuthReducer from 'modules/Auth/reducer';

export default combineReducers({
  auth: AuthReducer,
});