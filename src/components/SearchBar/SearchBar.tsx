import React, { useState } from 'react';
import classes from './SearchBar.module.scss';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { search } from 'src/services/UserService';
import UserResponse from 'src/model/UserResponse';
import { toast } from 'react-toastify';

interface SearchBarProps {
  setSearchResult: React.Dispatch<React.SetStateAction<UserResponse[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    search(e.target.value)
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  return (
    <div className={`${classes['c-search-container']}`}>
      <HiMiniMagnifyingGlass className={`${classes['c-search-container__search-icon']}`} />
      <input
        type='text'
        className={`${classes['c-search-container__search']}`}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
