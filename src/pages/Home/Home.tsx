import classes from './Home.module.scss';
import Sidebar from 'src/components/Sidebar/Sidebar';
import Feed from 'src/components/Feed/Feed';

const Home = () => {
  return (
    <div className={`${classes['c-home']}`}>
      <Sidebar>
        <h1>Profile</h1>
        <h2>Menu</h2>
      </Sidebar>

      <Feed />

      <Sidebar>
        <h1>Requests</h1>
        <h2>Friends</h2>
      </Sidebar>
    </div>
  );
};

export default Home;
