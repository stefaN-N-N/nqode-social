import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './pages/Edit/Edit';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <>
      <ToastContainer position='top-center' hideProgressBar theme='colored' autoClose={1500} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='settings' element={<Edit />} />
            <Route path='profile/:id' element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
