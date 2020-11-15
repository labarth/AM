import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { LoginPage } from './components/LoginPage';
import { loginRequest } from './actions';

export const Login = () => {
  const dispatch = useDispatch();

  const login = useCallback(
    (user) => dispatch(loginRequest(user)),
    [dispatch]
  );

  return (<LoginPage login={login} />);
}