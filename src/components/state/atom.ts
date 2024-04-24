import { atom } from 'recoil';
import CommentResponse from 'src/model/CommentResponse';
import FriendshipResponse from 'src/model/FriendshipResponse';
import PostResponse from 'src/model/PostResponse';
import UserResponse from 'src/model/UserResponse';

export const loggedUser = atom<UserResponse>({
  key: 'loggedUser',
  default: {} as UserResponse
});

export const commentsState = atom({
  key: 'comments',
  default: new Map<number, CommentResponse[]>()
});

export const frienshipRequests = atom({
  key: 'friendshipRequests',
  default: [] as FriendshipResponse[]
});

export const friendsState = atom({
  key: 'friendsState',
  default: [] as UserResponse[]
});

export const postsState = atom({
  key: 'postsState',
  default: [] as PostResponse[]
});

export const totalPostsState = atom({
  key: 'totalPostsState',
  default: 0
});
