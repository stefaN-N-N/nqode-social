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
    if (e.target.value.length >= 3) {
      search(e.target.value)
        .then((response) => {
          setSearchResult(response.data);
        })
        .catch(() => {
          toast.error('Something went wrong');
        });
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div className={`${classes['c-search']}`}>
      <HiMiniMagnifyingGlass className={`${classes['c-search__icon']}`} />
      <input
        type='text'
        className={`${classes['c-search__input']}`}
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search for users...'
      />
    </div>
  );
};

export default SearchBar;
