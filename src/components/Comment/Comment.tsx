import React from 'react';
import CommentResponse from 'src/model/CommentResponse';
import classes from './Comment.module.scss';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';
import { commentsState, loggedUser } from '../state/atom';
import Button from '../core/Button/Button';
import { deleteComment } from 'src/services/CommentService';

interface CommentProps {
  comment: CommentResponse;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [currentLoggedUser] = useRecoilState(loggedUser);
  const [, setComments] = useRecoilState(commentsState);

  const handleDelete = () => {
    deleteComment(comment.id).then(() => {
      setComments((prevMap) => {
        const newMap = new Map([...prevMap]);
        const currentComments = newMap.get(comment.post.id) || [];

        const updatedComments = currentComments?.filter(
          (currComment) => currComment.id !== comment.id
        );

        newMap.set(comment.post.id, updatedComments);
        return newMap;
      });
    });
  };

  return (
    <div className={`${classes['c-comment']}`}>
      <div className={`${classes['c-comment__header']}`}>
        <div className={`${classes['c-comment__user-info']}`}>
          <HiOutlineUserCircle className={`${classes['c-comment__avatar']}`} />
          <span>{`${comment.author.firstName} ${comment.author.lastName}`}</span>
        </div>
        <div className={`${classes['c-comment__delete-section']}`}>
          <span className={`${classes['c-comment__created-at']}`}>
            {dayjs(comment.createdAt).format('MMMM D, YYYY')}
          </span>
          {currentLoggedUser.id === comment.author.id ? (
            <Button label='Delete' modifiers={['error']} onClick={handleDelete} />
          ) : (
            <></>
          )}
        </div>
      </div>
      {comment.content}
    </div>
  );
};

export default Comment;
