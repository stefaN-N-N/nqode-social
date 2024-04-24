import { useEffect } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import classes from './Feed.module.scss';
import { getPosts } from 'src/services/PostService';
import { toast } from 'react-toastify';
import Post from '../Post/Post';
import { useRecoilState } from 'recoil';
import { postsState } from '../state/atom';

const Feed = () => {
  const [posts, setPosts] = useRecoilState(postsState);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch(() => {
        toast.error('Something went wrong');
      });
  }, [setPosts]);

  return (
    <div className={`${classes['c-feed']}`}>
      <CreatePost />
      {posts.map((post) => <Post post={post} key={post.id} />).reverse()}
    </div>
  );
};

export default Feed;
