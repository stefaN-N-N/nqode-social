import { axios } from 'src/config/axios';
import UserRegister from 'src/model/UserRegister';

export const register = (user: UserRegister) => {
  return axios.post('auth/register', user);
};

export const checkUsername = (username: string) => {
  return axios.get(`users/check-username/${username}`);
};

export const checkEmail = (email: string) => {
  return axios.get(`users/check-email/${email}`);
};

export const search = (searchTerm: string) => {
  return axios.get(`users/search?searchTerm=${searchTerm}&size=6&sort=firstName,asc`);
};

export const countUserPosts = (id: number) => {
  return axios.get(`users/${id}/count-posts`);
};
