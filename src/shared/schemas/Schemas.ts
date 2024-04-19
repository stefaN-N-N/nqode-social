import AuthenticationRequest from 'src/model/AuthenticationRequest';
import UserRegister from 'src/model/UserRegister';
import { checkEmail, checkUsername } from 'src/services/UserService';
import * as yup from 'yup';

export const registerSchema: yup.Schema<UserRegister> = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  username: yup
    .string()
    .required('Username is required')
    .test('is-unique-username', 'Username is already taken', async function (username) {
      if (!username) return true;
      try {
        const isUnique = (await checkUsername(username)).data;
        return isUnique;
      } catch (error) {
        return false;
      }
    }),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required')
    .test('is-unique-email', 'Email is already taken', async function (email) {
      if (!email) return true;
      try {
        const isUnique = (await checkEmail(email)).data;
        return isUnique;
      } catch (error) {
        return false;
      }
    }),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

export const loginSchema: yup.Schema<AuthenticationRequest> = yup.object().shape({
  username: yup.string().required('Enter username'),
  password: yup.string().required('Enter password')
});
