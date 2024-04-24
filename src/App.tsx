import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './pages/Edit/Edit';
import Profile from './pages/Profile/Profile';
import Requests from './pages/Requests/Requests';
import Friends from './pages/Friends/Friends';
import RequireAuth from './pages/RequireAuth/RequireAuth';

const App = () => {
  return (
    <>
      <ToastContainer position='top-center' hideProgressBar theme='colored' autoClose={1500} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<RequireAuth />}>
              <Route path='home' element={<Home />} />
              <Route path='settings' element={<Edit />} />
              <Route path='profile/:id' element={<Profile />} />
              <Route path='requests' element={<Requests />} />
              <Route path='friends' element={<Friends />} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
