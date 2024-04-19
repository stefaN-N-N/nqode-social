import CreatePost from '../CreatePost/CreatePost';
import classes from './Feed.module.scss';

const Feed = () => {
  return (
    <div className={`${classes['c-feed']}`}>
      <CreatePost />
    </div>
  );
};

export default Feed;
