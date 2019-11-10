import useForm from 'react-hook-form';
import * as yup from 'yup';

export interface Login {
  username: string;
  password: string;
}

export const LoginKey: { [P in keyof Login]: P } = {
  username: 'username',
  password: 'password',
};

export const loginSchema: yup.Schema<Login> = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const useLoginForm = () => {
  return useForm<Login>({ validationSchema: loginSchema });
};
