import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Login } from 'modules/auth/Login';
import { SignUp } from 'modules/auth/SignUp/containers/SignUp';
import { Home } from 'modules/home/Home';
import { applicationRun } from 'modules/common/Application/actions';
import { applicationLoadingSelector } from 'modules/common/Application/selectors';
import { PageLoading } from 'modules/common/components/PageLoading';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(applicationLoadingSelector);

  useEffect(() => {
    dispatch(applicationRun());
  }, [dispatch]);

  return (
    loading ? <PageLoading /> : (
    <>
      <Route component={Home}  path="/" exact />
      <Route component={SignUp} path="/signup" exact />
      <Route component={Login} path="/login" exact />
    </>
    )
  );
}

export default App;
