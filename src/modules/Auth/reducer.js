import { combineReducers } from 'redux';
import { signUpReducer } from './SignUp/reducer';

const AuthReducer = combineReducers({
  signUp: signUpReducer,
})

export default AuthReducer;