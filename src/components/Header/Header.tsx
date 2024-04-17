import React, { useState } from 'react';
import classes from './Header.module.scss';
import SearchBar from 'src/components/SearchBar/SearchBar';
import UserResponse from 'src/model/UserResponse';
import SearchResult from '../SearchResult/SearchResult';
import Button from '../core/Button/Button';
import { HiMiniArrowRightStartOnRectangle } from 'react-icons/hi2';

const Header = () => {
  const [searchResult, setSearchResult] = useState<UserResponse[]>([]);
  return (
    <div className={`${classes['c-header-container']}`}>
      <h1 className={`${classes['c-header-container__logo']}`}>nSocial</h1>
      <SearchBar setSearchResult={setSearchResult} />
      <SearchResult searchResult={searchResult} />

      <Button
        label='Logout'
        modifiers={['fit-content', 'align-right']}
        iconLeft={
          <HiMiniArrowRightStartOnRectangle className={`${classes['c-header-container__icon']}`} />
        }
      />
    </div>
  );
};

export default Header;
