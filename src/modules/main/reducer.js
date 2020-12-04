import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import AuthReducer from 'modules/auth/reducer';
import userReducer from 'modules/user/reducers';
import applicationReducer from 'modules/application/reducers';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: AuthReducer,
  user: userReducer,
  application: applicationReducer,
});

export default createRootReducer