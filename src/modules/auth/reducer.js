import { combineReducers } from 'redux';
import { signUpReducer } from './containers/SignUp/reducer';
import { loginReducer } from './containers/Login/reducer';

const AuthReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
})

export default AuthReducer;