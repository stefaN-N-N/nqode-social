import React from 'react';
import classes from './Post.module.scss';
import PostResponse from 'src/model/PostResponse';
import dayjs from 'dayjs';

interface PostProps {
  post: PostResponse;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={`${classes['c-post']}`}>
      <div className={`${classes['c-post__header']}`}>
        <img src='https://picsum.photos/id/1/200/200' className={`${classes['c-post__avatar']}`} />
        <div className={`${classes['c-post__info']}`}>
          <h4>{post.user}</h4>
          <span className={`${classes['c-post__created-at']}`}>
            {dayjs(post.createdAt).format('MMMM D, YYYY')}
          </span>
        </div>
      </div>
      <span>{post.content}</span>
      {post.fileId && (
        <img
          className={`${classes['c-post__image']}`}
          src={`${import.meta.env.VITE_BACKEND_URL}file?id=${post.fileId}`}
        />
      )}
    </div>
  );
};

export default Post;
