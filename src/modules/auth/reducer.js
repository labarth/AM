import { combineReducers } from 'redux';
import { signUpReducer } from './SignUp/reducer';
import { loginReducer } from './Login/reducer';

const AuthReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
})

export default AuthReducer;