import { atom } from 'recoil';
import UserResponse from 'src/model/UserResponse';

export const loggedUser = atom({
  key: 'loggedUser',
  default: {} as UserResponse
});
