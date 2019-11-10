import { User } from '../../model/user';
import { delay } from '../shared';

export const AuthService = {
  login: ({ username, password }: { username: string; password: string }) =>
    delay(300).then<User>(() =>
      username === 'happy' && password === '123456' ? { name: 'Happy' } : Promise.reject(false),
    ),

  logout: () => delay(300).then(() => true),
};
