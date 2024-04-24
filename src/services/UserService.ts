import { axios } from 'src/config/axios';
import UserRegister from 'src/model/UserRegister';
import UserUpdate from 'src/model/UserUpdate';
import UserResponse from 'src/model/UserResponse';

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

export const isUsernameEditable = (username: string, id: string) => {
  return axios.get(`users/editable-username/${username}/${id}`);
};

export const isEmailEditable = (email: string, id: string) => {
  return axios.get(`users/editable-email/${email}/${id}`);
};

export const update = (user: UserUpdate, id: string) => {
  return axios.put(`users/${id}`, user);
};

export const getUserById = (id: number) => {
  return axios.get<UserResponse>(`users?id=${id}`);
};

export const getFriends = (id: number) => {
  return axios.get<UserResponse[]>(`users/${id}/friends`);
};
