import { createContext, Dispatch, useReducer } from 'react';
import { DEFAULT_USER, User } from '../model/user';

export type State = {
  isLogin: boolean;
  user: User;
};

const DEFAULT_STATE: State = {
  isLogin: false,
  user: DEFAULT_USER,
};

export type StateAction<Type, Payload> = { type: Type; payload: Payload };

export type StateActions = StateAction<'LOGOUT', null> | StateAction<'LOGIN', User>;

const reducer = (state = DEFAULT_STATE, action: StateActions) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isLogin: true };
    case 'LOGOUT':
      return { ...state, user: DEFAULT_USER, isLogin: false };
    default:
      return state;
  }
};

export const useGlobalState = () => useReducer(reducer, DEFAULT_STATE);

export const GlobalStateContext = createContext<{ state: State; dispatch: Dispatch<StateActions> }>(
  {} as any,
);
