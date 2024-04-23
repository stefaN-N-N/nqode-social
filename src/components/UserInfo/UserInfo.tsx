import { useEffect, useState } from 'react';
import classes from './UserInfo.module.scss';
import { countUserPosts } from 'src/services/UserService';
import { loggedUser } from '../state/atom';
import { useRecoilState } from 'recoil';

const UserInfo = () => {
  const [user] = useRecoilState(loggedUser);
  const [postsNumber, setPostsNumber] = useState();

  useEffect(() => {
    if (user?.id) {
      countUserPosts(user.id).then((res) => setPostsNumber(res.data));
    }
  }, [user?.id]);

  return (
    <div className={`${classes['c-user-info']}`}>
      <div className={`${classes['c-user-info__header']}`}>
        <img
          src='https://picsum.photos/id/237/200/200'
          className={`${classes['c-user-info__avatar']}`}
        />
        <div className={`${classes['c-user-info__name-container']}`}>
          <h4>{`${user?.firstName} ${user?.lastName}`}</h4>
          <span className={`${classes['c-user-info__username']}`}>{user?.username}</span>
        </div>
      </div>
      <div className={`${classes['c-user-info__additional-info-container']}`}>
        <div className={`${classes['c-user-info__additional-info']}`}>
          <span className={`${classes['c-user-info__number']}`}>{user?.friendsNumber}</span>
          <span className={`${classes['c-user-info__label']}`}>Friends</span>
        </div>
        <div className={`${classes['c-user-info__additional-info']}`}>
          <span className={`${classes['c-user-info__number']}`}>{postsNumber}</span>
          <span className={`${classes['c-user-info__label']}`}>Posts</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
