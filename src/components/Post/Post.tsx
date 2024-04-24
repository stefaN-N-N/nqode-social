import React, { useEffect, useState } from 'react';
import classes from './Post.module.scss';
import PostResponse from 'src/model/PostResponse';
import dayjs from 'dayjs';
import { getComments } from 'src/services/PostService';
import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import { useRecoilState } from 'recoil';
import { commentsState } from '../state/atom';
import { HiOutlineUserCircle } from 'react-icons/hi2';

interface PostProps {
  post: PostResponse;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useRecoilState(commentsState);

  useEffect(() => {
    getComments(post.id).then((response) =>
      setComments((prevCommentMap) => {
        const newMap = new Map([...prevCommentMap]);
        newMap.set(post.id, response.data);
        return newMap;
      })
    );
  }, [post.id, setComments]);

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <div className={`${classes['c-post']}`}>
      <div className={`${classes['c-post__header']}`}>
        <HiOutlineUserCircle className={`${classes['c-post__avatar']}`} />
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
      {comments.get(post.id)?.length ? (
        <span onClick={handleShowComments} className={`${classes['c-post__show-comments']}`}>
          Show all comments ({comments.get(post.id)?.length})
        </span>
      ) : (
        <></>
      )}
      {showComments &&
        comments.get(post.id)?.map((comment) => <Comment comment={comment} key={comment.id} />)}
      <CreateComment post={post} />
    </div>
  );
};

export default Post;
