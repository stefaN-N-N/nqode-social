import { atom } from 'recoil';
import CommentResponse from 'src/model/CommentResponse';
import UserResponse from 'src/model/UserResponse';

export const loggedUser = atom({
  key: 'loggedUser',
  default: {} as UserResponse
});

export const commentsState = atom({
  key: 'comments',
  default: new Map<number, CommentResponse[]>()
});
