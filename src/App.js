import { Route, Link } from 'react-router-dom';
import { Login } from './modules/Auth/Login';
import { SignUp } from './modules/Auth/SignUp/containers/SignUp';
import { Home } from './modules/Home/Home';

const App = () => {
  return (
    <>
      <Route component={Home}  path="/" exact />
      <Route component={SignUp} path="/singup" exact />
      <Route component={Login} path="/login" exact />
    </>
  );
}

export default App;
