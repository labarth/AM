import { useCallback } from 'react';
import { SignUpForm } from 'modules/auth/containers/SignUp/components/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { createUser as createUserAction } from 'modules/auth/containers/SignUp/actions';
import { signUpSelector } from 'modules/auth/containers/SignUp/selectors';

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