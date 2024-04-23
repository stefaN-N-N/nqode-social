import { useEffect, useState } from 'react';
import UserResponse from 'src/model/UserResponse';
import classes from './ProfileInfo.module.scss';
import { countUserPosts } from 'src/services/UserService';

interface ProfileInfoProps {
  user: UserResponse;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  const [postsNumber, setPostsNumber] = useState();

  useEffect(() => {
    if (user.id) {
      countUserPosts(user.id).then((res) => setPostsNumber(res.data));
    }
  }, [user.id]);

  return (
    <div className={`${classes['c-profile-info']}`}>
      <img
        src='https://picsum.photos/id/1/200/200'
        className={`${classes['c-profile-info__avatar']}`}
      />
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
            <span className={`${classes['c-profile-info__number']}`}>{postsNumber}</span>
            <span className={`${classes['c-profile-info__label']}`}>Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
