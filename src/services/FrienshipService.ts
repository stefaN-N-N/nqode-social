import { axios } from 'src/config/axios';
import FriendshipRequest from 'src/model/FriendshipRequest';
import { RequestStatus } from 'src/model/RequestStatus';

export const getRequests = (id: number) => {
  return axios.get(`users/${id}/requests`);
};

export const answerRequest = (id: number, status: RequestStatus) => {
  return axios.patch(`friendships/${id}?requestStatus=${status}`);
};

export const sendRequest = (request: FriendshipRequest) => {
  return axios.post('friendships', request);
};

export const unfriend = (requesterId: number, receiverId: number) => {
  return axios.delete(`/friendships?requesterId=${requesterId}&receiverId=${receiverId}`);
};
