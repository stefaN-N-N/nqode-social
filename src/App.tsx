import Button from 'components/core/Button/Button';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes['c-app']}>
      <h3 className={classes['c-app__title']}>BEM example:</h3>
      <div className={classes['c-app__button-container']}>
        <Button label='Primary button' />
        <Button label='Secondary button' variant='secondary' />
      </div>
    </div>
  );
};

export default App;
