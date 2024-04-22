import { axios } from 'src/config/axios';
import PostCreate from 'src/model/PostCreate';

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
