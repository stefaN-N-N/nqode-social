import classes from './Home.module.scss';
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
    </div>
  );
};

export default Home;
