import React from 'react';
import { useRecoilState } from 'recoil';
import UserResponse from 'src/model/UserResponse';
import { friendsState, loggedUser } from '../state/atom';
import classes from './FriendItem.module.scss';
import Button from '../core/Button/Button';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { unfriend } from 'src/services/FrienshipService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

interface FriendItemProps {
  user: UserResponse;
}

export const FriendItem: React.FC<FriendItemProps> = ({ user }) => {
  const [, setFriends] = useRecoilState(friendsState);
  const [currentlyLoggedUser, setCurrentlyLoggedUser] = useRecoilState(loggedUser);

  const handleUnfriend = () => {
    unfriend(user.id, currentlyLoggedUser.id)
      .then(() => {
        toast.info('Friend removed');

        setFriends((friends) => {
          return friends.filter((friend) => friend.id !== user.id);
        });

        setCurrentlyLoggedUser((prevUser) => ({
          ...prevUser,
          friendsNumber: prevUser.friendsNumber - 1
        }));
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  return (
    <div className={`${classes['c-friend-item']}`}>
      <div className={`${classes['c-friend-item__user-info-container']}`}>
        <HiOutlineUserCircle className={`${classes['c-friend-item__avatar']}`} />
        <Link to={`/profile/${user.id}`} className={`${classes['c-friend-item__user-info']}`}>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <span>{user.email}</span>
        </Link>
      </div>
      <div className={`${classes['c-friend-item__container']}`}>
        <div className={`${classes['c-friend-item__user-info']}`}>
          <h4>{user.friendsNumber}</h4>
          <span className={`${classes['c-friend-item__label']}`}>Friends</span>
        </div>
        <div className={`${classes['c-friend-item__button-container']}`}>
          <Button label='Unfriend' onClick={handleUnfriend} />
        </div>
      </div>
    </div>
  );
};
