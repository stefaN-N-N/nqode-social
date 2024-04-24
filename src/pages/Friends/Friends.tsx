import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { friendsState, loggedUser } from 'src/components/state/atom';
import { getFriends } from 'src/services/UserService';
import classes from './Friends.module.scss';
import { FriendItem } from 'src/components/FriendItem/FriendItem';

const Friends = () => {
  const [user] = useRecoilState(loggedUser);
  const [friends, setFriends] = useRecoilState(friendsState);

  useEffect(() => {
    getFriends(user.id)
      .then((response) => setFriends(response.data))
      .catch(() => {
        toast.error('Something went wrong');
      });
  }, [setFriends, user.id]);

  if (friends.length === 0) return <h1>No friends</h1>;

  return (
    <div className={`${classes['c-friends']}`}>
      {friends.map((friend) => (
        <FriendItem user={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default Friends;
