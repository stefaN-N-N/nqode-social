import { axios } from 'src/config/axios';
import UserRegister from 'src/model/UserRegister';

export const register = async (user: UserRegister) => {
  return await axios.post('auth/register', user);
};

export const checkUsername = async (username: string) => {
  return await axios.get(`users/check-username/${username}`);
};

export const checkEmail = async (email: string) => {
  return await axios.get(`users/check-email/${email}`);
};

export const search = async (searchTerm: string) => {
  return await axios.get(`users/search?searchTerm=${searchTerm}`);
};
