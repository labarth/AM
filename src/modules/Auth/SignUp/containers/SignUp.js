import { useCallback } from 'react';
import { SignUpForm } from '../components/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { createUser as createUserAction } from '../actions';
import { signUpSelector } from '../selectors';

export const SignUp = () => {
  const { loading, error } = useSelector(signUpSelector);
  const dispatch = useDispatch();

  const createUser = useCallback(
    (user) => dispatch(createUserAction(user)),
    [dispatch]
  )

  return (
    <SignUpForm
      loading={loading}
      error={error}
      createUser={createUser}
    />
  )
};