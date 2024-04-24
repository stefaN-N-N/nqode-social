import React, { useEffect, useState } from 'react';
import Button from '../core/Button/Button';
import classes from './CreatePost.module.scss';
import { HiOutlineCamera, HiOutlineUserCircle } from 'react-icons/hi2';
import { createPost } from 'src/services/PostService';
import { toast } from 'react-toastify';
import UserResponse from 'src/model/UserResponse';
import { useRecoilState } from 'recoil';
import { postsState, totalPostsState } from '../state/atom';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [user, setUser] = useState<UserResponse>();
  const [posts, setPosts] = useRecoilState(postsState);
  const [, setTotalPosts] = useRecoilState(totalPostsState);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, []);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) return;

    if (content.length >= 300) {
      toast.error('Maximum of 300 characters for content reached!');
      return;
    } else if (content.length === 0) {
      toast.error('Post must contain content!');
      return;
    }

    createPost({ content, file, authorId: user.id })
      .then((response) => {
        setContent('');
        setFile(null);
        setPosts([...posts, response.data]);
        setTotalPosts((prev) => prev + 1);
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  return (
    <form className={`${classes['c-create-post']}`} onSubmit={handleSubmit}>
      <div className={`${classes['c-create-post__content-container']}`}>
        <HiOutlineUserCircle className={`${classes['c-create-post__avatar']}`} />
        <textarea
          className={`${classes['c-create-post__input']}`}
          placeholder='What do you want to share?'
          value={content}
          onChange={handleContentChange}
        />
      </div>

      <div className={`${classes['c-create-post__body-container']}`}>
        <div className={`${classes['c-create-post__upload-image-container']}`}>
          <HiOutlineCamera className={`${classes['c-create-post__icon']}`} />
          <label htmlFor='uploadBtn' className={`${classes['c-create-post__label']}`}>
            Image
          </label>
          <input type='file' id='uploadBtn' onChange={handleFileChange} />
        </div>
        <Button label='New post' />
      </div>
    </form>
  );
};

export default CreatePost;
