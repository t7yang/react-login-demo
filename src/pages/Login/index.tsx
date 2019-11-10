import React, { FC, useContext } from 'react';
import { Redirect } from 'react-router';
import { LoginForm } from '../../component/Login';
import { GlobalStateContext } from '../../state';
import './index.css';

export const LoginPage: FC = () => {
  const { state } = useContext(GlobalStateContext);

  return (
    <main className="login-page">
      <h1>Login</h1>

      <section className="login-form" style={{ width: 300 }}>
        {state.isLogin ? <Redirect to="/"></Redirect> : <LoginForm></LoginForm>}
      </section>
    </main>
  );
};
