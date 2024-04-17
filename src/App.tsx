import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
