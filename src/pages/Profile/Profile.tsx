import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from 'src/components/Post/Post';
import PostResponse from 'src/model/PostResponse';
import { getAllPostsByAuthor } from 'src/services/PostService';
import classes from './Profile.module.scss';
import Sidebar from 'src/components/Sidebar/Sidebar';
import UserResponse from 'src/model/UserResponse';
import { getUserById } from 'src/services/UserService';
import ProfileInfo from 'src/components/ProfileInfo/ProfileInfo';
import { toast } from 'react-toastify';

const Profile = () => {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [user, setUser] = useState<UserResponse>();
  const { id } = useParams();

  const fetchPosts = (id: string) => {
    getAllPostsByAuthor(Number.parseInt(id))
      .then((response) => setPosts(response.data))
      .catch(() => toast.error('Something went wrong'));
  };

  const fetchUser = async (id: string) => {
    getUserById(Number.parseInt(id))
      .then((response) => setUser(response.data))
      .catch(() => toast.error('Something went wrong'));
  };

  useEffect(() => {
    if (id) {
      fetchPosts(id);
      fetchUser(id);
    }
  }, [id]);

  if (!user) return <h2>User not found</h2>;

  return (
    <div className={`${classes['c-profile']}`}>
      <div className={`${classes['c-profile__main-section']}`}>
        <ProfileInfo user={user} />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <Sidebar>
        <h1>Requests</h1>
        <h2>Friends</h2>
      </Sidebar>
    </div>
  );
};

export default Profile;
