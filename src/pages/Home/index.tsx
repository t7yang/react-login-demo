import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthService } from '../../service/auth';
import { GlobalStateContext } from '../../state';
import './index.css';

export const HomePage: FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const history = useHistory();

  const onLogout = () =>
    AuthService.logout().then(() => dispatch({ type: 'LOGOUT', payload: null }));

  const onLogin = () => history.push('/login');

  return (
    <main className="home-page">
      <h1>{'Welcome ' + state.user.name}</h1>
      <div>
        {state.isLogin ? (
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={onLogin}>
            Login
          </button>
        )}
      </div>
    </main>
  );
};
