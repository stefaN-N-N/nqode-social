import { Base64 } from 'js-base64';
import React, { useEffect, useState } from 'react';
import PostResponse from 'src/model/PostResponse';
import { downloadFile, getAllPosts } from 'src/services/UserService';

const Feed = () => {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [file, setFile] = useState<string>();

  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);

  // useEffect(() => {
  //   if (posts[1]?.fileId !== null) {
  //     downloadFile(posts[1].fileId).then((res) => console.log(res));
  //     // console.log(posts[1].fileId);
  //   }
  // }, [posts]);

  useEffect(() => {
    if (posts.length > 1 && posts[1]?.fileId !== null)
      downloadFile(posts[1].fileId).then((res) => {
        // const base64String = btoa(String.fromCharCode(...new Uint8Array(res.data)));
        // const imageUrl = `data:image/png;base64,${base64String}`;
        // const url = 'data:image/jpeg;base64,' + Base64.encode(res.data);
        // setFile(imageUrl);
        // setFile(url);
        setFile(res.data);
      });
  }, [posts]);

  return (
    <div>
      {file && <img width={50} height={50} src='http://localhost:8080/api/v1/file?id=4' />}
      {/* {posts.map((post, id) => (
        <>
          <div>{`${post.user} `} </div>} */}
      {/* <div key={id}>
            {post.fileId ? (
              <img src={post.fileId} style={{ width: '50px', height: '50px' }} />
            ) : (
              <></>
            )}
          </div> */}
      {/* </>
      ))} */}
      {/* {file} */}
    </div>
  );
};

export default Feed;
