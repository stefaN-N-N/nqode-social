import { axios } from 'src/config/axios';
import CommentCreate from 'src/model/CommentCreate';

export const createComment = (comment: CommentCreate) => {
  return axios.post('comments', comment);
};

export const replyComment = (id: number, comment: CommentCreate) => {
  return axios.post(`comments/${id}/reply`, comment);
};

export const deleteComment = (id: number) => {
  return axios.delete(`comments/${id}`);
};
