import React, { useState } from 'react';
import classes from './TopBar.module.scss';
import SearchBar from 'src/components/SearchBar/SearchBar';
import UserResponse from 'src/model/UserResponse';
import SearchResult from '../SearchResult/SearchResult';
import Button from '../core/Button/Button';
import { HiMiniArrowRightStartOnRectangle } from 'react-icons/hi2';
import { logout } from 'src/services/AuthenticationService';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<UserResponse[]>([]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={`${classes['c-header-container']}`}>
      <h1 className={`${classes['c-header-container__logo']}`}>nSocial</h1>

      <SearchBar setSearchResult={setSearchResult} />
      <SearchResult searchResult={searchResult} setSearchResult={setSearchResult} />

      <Button
        label='Logout'
        modifiers={['fit-content', 'align-right']}
        variant='secondary'
        onClick={handleLogout}
        iconLeft={
          <HiMiniArrowRightStartOnRectangle className={`${classes['c-header-container__icon']}`} />
        }
      />
    </div>
  );
};

export default TopBar;
