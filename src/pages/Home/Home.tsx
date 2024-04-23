import classes from './Home.module.scss';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Feed from 'src/components/Feed/Feed';
import { useRecoilState } from 'recoil';
import { loggedUser } from 'src/components/state/atom';
import { useEffect } from 'react';

const Home = () => {
  const [, setUser] = useRecoilState(loggedUser);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, [setUser]);

  return (
    <div className={`${classes['c-home']}`}>
      <Feed />

      <Sidebar>
        <h1>Requests</h1>
        <h2>Friends</h2>
      </Sidebar>
    </div>
  );
};

export default Home;
