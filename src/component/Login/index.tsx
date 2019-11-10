import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router';
import { LoginKey, useLoginForm } from '../../model/login';
import { AuthService } from '../../service/auth';
import { GlobalStateContext } from '../../state';

export const LoginForm: FC = () => {
  const { register, errors, handleSubmit } = useLoginForm();
  const { dispatch } = useContext(GlobalStateContext);
  const history = useHistory();

  const onSubmit = handleSubmit(data =>
    AuthService.login(data)
      .then(user => dispatch({ type: 'LOGIN', payload: user }))
      .then(() => history.push('/'))
      .catch(() => alert('Username or Password Error')),
  );

  return (
    <form className="login-form form" onSubmit={onSubmit}>
      <div className="form__control">
        <label>
          <span>User Name</span>
          <input type="text" name={LoginKey.username} ref={register} />
        </label>
        {errors.username && <p className="form__error">{errors.username.message}</p>}
      </div>

      <div className="form__control">
        <label>
          <span>Password</span>
          <input type="password" name={LoginKey.password} ref={register} />
        </label>
        {errors.password && <p className="form__error">{errors.password.message}</p>}
      </div>

      <div className="form__control">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
