import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import AuthReducer from 'modules/Auth/reducer';
import userReducer from 'modules/common/User/reducers';
import applicationReducer from 'modules/common/Application/reducers';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: AuthReducer,
  user: userReducer,
  application: applicationReducer,
});

export default createRootReducer