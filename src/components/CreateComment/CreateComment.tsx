import React, { useState } from 'react';
import PostResponse from 'src/model/PostResponse';
import classes from './CreateComment.module.scss';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiPaperAirplane } from 'react-icons/hi2';
import { createComment } from 'src/services/CommentService';
import { useRecoilState } from 'recoil';
import { commentsState, loggedUser } from '../state/atom';
import { toast } from 'react-toastify';

interface CreateCommentProps {
  post: PostResponse;
}

const CreateComment: React.FC<CreateCommentProps> = ({ post }) => {
  const [content, setContent] = useState('');
  const [currentLoggedUser] = useRecoilState(loggedUser);
  const [, setComments] = useRecoilState(commentsState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    if (content.length === 0) return;
    createComment({ content, authorId: currentLoggedUser.id, postId: post.id })
      .then((response) =>
        setComments((prevMap) => {
          const newMap = new Map([...prevMap]);
          const currentComments = newMap.get(post.id) || [];
          newMap.set(post.id, [...currentComments, response.data]);
          return newMap;
        })
      )
      .catch(() => {
        toast.error('Something went wrong');
      });
    setContent('');
  };

  return (
    <div className={`${classes['c-create-comment']}`}>
      <HiOutlineUserCircle className={`${classes['c-create-comment__avatar']}`} />
      <div className={`${classes['c-create-comment__input-section']}`}>
        <input
          type='text'
          placeholder='Write comment...'
          value={content}
          className={`${classes['c-create-comment__input']}`}
          onChange={handleChange}
        />
        <HiPaperAirplane
          className={`${classes['c-create-comment__send-btn']}`}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateComment;
