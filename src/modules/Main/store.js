import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from 'modules/Main/reducer';
import { signUpSagaWatcher } from '../Auth/SignUp/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(signUpSagaWatcher);

export { store };