import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Login } from './modules/Auth/Login';
import { SignUp } from './modules/Auth/SignUp/containers/SignUp';
import { Home } from './modules/Home/Home';
import { runApplication } from './modules/Main/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(runApplication());
  }, [dispatch, runApplication]);

  return (
    <>
      <Route component={Home}  path="/" exact />
      <Route component={SignUp} path="/singup" exact />
      <Route component={Login} path="/login" exact />
    </>
  );
}

export default App;
