import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Login } from 'modules/auth/containers/Login';
import { SignUp } from 'modules/auth/containers/SignUp/containers/SignUp';
import { Home } from 'modules/pages/containers/PageHome/Home';
import { applicationRun } from 'modules/application/actions';
import { applicationLoadingSelector } from 'modules/application/selectors';
import { PageLoading } from 'components/PageLoading';
import { PageNotFound } from 'components/PageNotFound';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(applicationLoadingSelector);

  useEffect(() => {
    dispatch(applicationRun());
  }, [dispatch]);

  return (
    loading ? <PageLoading /> : (
    <Switch>
      <Route component={Home}  path="/" exact />
      <Route component={SignUp} path="/signup" exact />
      <Route component={Login} path="/login" exact />
      <Route component={PageNotFound} path="*" />
    </Switch>
    )
  );
}

export default App;
