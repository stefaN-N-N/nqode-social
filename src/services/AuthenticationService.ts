import { jwtDecode } from 'jwt-decode';
import { axios } from 'src/config/axios';
import AuthenticationRequest from 'src/model/AuthenticationRequest';

export const login = async (user: AuthenticationRequest) => {
  return await axios.post('auth/authenticate', user);
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export const extractUsernameFromToken = (token: string) => {
  return jwtDecode(token).sub;
};

export const getUserFromToken = async (token: string) => {
  const username = extractUsernameFromToken(token);
  await axios
    .get(`users/${username}`)
    .then((res) => localStorage.setItem('user', JSON.stringify(res.data)));
};
