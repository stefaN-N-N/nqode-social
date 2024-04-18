import { useEffect, useState } from 'react';
import classes from './UserInfo.module.scss';
import UserResponse from 'src/model/UserResponse';
import { countUserPosts } from 'src/services/UserService';

const UserInfo = () => {
  const [user, setUser] = useState<UserResponse>();
  const [postsNumber, setPostsNumber] = useState();

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, []);

  useEffect(() => {
    if (user?.id) {
      countUserPosts(user.id).then((res) => setPostsNumber(res.data));
    }
  }, [user?.id]);

  if (!user) return <h3>Loading user info...</h3>;

  return (
    <div className={`${classes['c-user-info']}`}>
      <div className={`${classes['c-user-info__header']}`}>
        <img
          src='https://picsum.photos/id/237/200/200'
          className={`${classes['c-user-info__avatar']}`}
        />
        <div>
          <h4>{user.firstName + ' ' + user.lastName}</h4>
          <p className={`${classes['c-user-info__username']}`}>{user.username}</p>
        </div>
      </div>
      <div className={`${classes['c-user-info__additional-info-container']}`}>
        <div className={`${classes['c-user-info__additional-info']}`}>
          <p className={`${classes['c-user-info__number']}`}>{user.friendsNumber}</p>
          <p className={`${classes['c-user-info__label']}`}>Friends</p>
        </div>
        <div className={`${classes['c-user-info__additional-info']}`}>
          <p className={`${classes['c-user-info__number']}`}>{postsNumber}</p>
          <p className={`${classes['c-user-info__label']}`}>Posts</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
