import { useEffect } from 'react';
import UserResponse from 'src/model/UserResponse';
import classes from './ProfileInfo.module.scss';
import { countUserPosts, getFriends } from 'src/services/UserService';
import Button from '../core/Button/Button';
import { useRecoilState } from 'recoil';
import { friendsState, loggedUser, totalPostsState } from '../state/atom';
import { sendRequest, unfriend } from 'src/services/FrienshipService';
import { toast } from 'react-toastify';
import { HiOutlineUserCircle } from 'react-icons/hi2';

interface ProfileInfoProps {
  user: UserResponse;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  const [currentLoggedUser, setCurrentLoggedUser] = useRecoilState(loggedUser);
  const [friends, setFriends] = useRecoilState(friendsState);
  const [totalPosts, setTotalPosts] = useRecoilState(totalPostsState);

  useEffect(() => {
    if (user.id) {
      countUserPosts(user.id).then((res) => setTotalPosts(res.data));
    }
  }, [setTotalPosts, user.id]);

  useEffect(() => {
    getFriends(user.id).then((response) => setFriends(response.data));
  }, [setFriends, user.id]);

  const handleSendRequest = () => {
    sendRequest({ requesterId: currentLoggedUser.id, receiverId: user.id })
      .then((response) => {
        toast.success('Frienship request send');
        setFriends((prev) => [...prev, response.data]);
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  const handleUnfriend = () => {
    unfriend(user.id, currentLoggedUser.id)
      .then(() => {
        setCurrentLoggedUser((prevUser) => ({
          ...prevUser,
          friendsNumber: prevUser.friendsNumber - 1
        }));

        setFriends((friends) => {
          return friends.filter((friend) => friend.id !== user.id);
        });
        toast.info('Friend removed');
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  const checkFrienship = () => {
    return friends.some((friend) => friend.id === currentLoggedUser.id);
  };

  return (
    <div className={`${classes['c-profile-info']}`}>
      <HiOutlineUserCircle className={`${classes['c-profile-info__avatar']}`} />
      <div className={`${classes['c-profile-info__container']}`}>
        <div className={`${classes['c-profile-info__name-section']}`}>
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
          <span className={`${classes['c-profile-info__username']}`}>{`(${user.username})`}</span>
        </div>

        <div className={`${classes['c-profile-info__additional-info-container']}`}>
          <div className={`${classes['c-profile-info__additional-info']}`}>
            <span className={`${classes['c-profile-info__number']}`}>{user.email}</span>
            <span className={`${classes['c-profile-info__label']}`}>Email</span>
          </div>
          <div className={`${classes['c-profile-info__additional-info']}`}>
            <span className={`${classes['c-profile-info__number']}`}>{user.friendsNumber}</span>
            <span className={`${classes['c-profile-info__label']}`}>Friends</span>
          </div>
          <div className={`${classes['c-profile-info__additional-info']}`}>
            <span className={`${classes['c-profile-info__number']}`}>{totalPosts}</span>
            <span className={`${classes['c-profile-info__label']}`}>Posts</span>
          </div>

          {user.id !== currentLoggedUser.id && (
            <Button
              label={checkFrienship() ? 'Unfriend' : 'Send request'}
              onClick={checkFrienship() ? handleUnfriend : handleSendRequest}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
