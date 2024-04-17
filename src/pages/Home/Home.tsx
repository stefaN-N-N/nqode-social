import classes from './Home.module.scss';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Feed from 'src/components/Feed/Feed';

const Home = () => {
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
