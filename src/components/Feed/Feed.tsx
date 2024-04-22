import { useEffect, useState } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import classes from './Feed.module.scss';
import PostResponse from 'src/model/PostResponse';
import { getPosts } from 'src/services/PostService';
import { toast } from 'react-toastify';
import Post from '../Post/Post';

const Feed = () => {
  const [posts, setPosts] = useState<PostResponse[]>([]);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch(() => {
        toast.error('Something went wrong');
      });
  }, []);

  return (
    <div className={`${classes['c-feed']}`}>
      <CreatePost posts={posts} updatePosts={setPosts} />
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
