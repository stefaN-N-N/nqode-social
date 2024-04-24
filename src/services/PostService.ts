import { axios } from 'src/config/axios';
import CommentResponse from 'src/model/CommentResponse';
import PostCreate from 'src/model/PostCreate';
import PostResponse from 'src/model/PostResponse';

export const createPost = (post: PostCreate) => {
  const multipartFile = new FormData();
  multipartFile.append('content', post.content);
  if (post.file) {
    multipartFile.append('file', post.file);
  }
  multipartFile.append('authorId', post.authorId.toString());

  return axios.post(`posts`, multipartFile, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const getPosts = () => {
  return axios.get<PostResponse[]>('posts');
};

export const getAllPostsByAuthor = (id: number) => {
  return axios.get<PostResponse[]>(`users/${id}/posts`);
};

export const getComments = (id: number) => {
  return axios.get<CommentResponse[]>(`posts/${id}/comments`);
};
