import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from 'modules/main/reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = createStore(createRootReducer(history), composeWithDevTools(
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  ),
));

sagaMiddleware.run(rootSaga);

export { store };