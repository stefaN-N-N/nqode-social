import React from 'react';
import UserResponse from 'src/model/UserResponse';
import classes from './SearchResult.module.scss';
import SearchResultItem from '../core/SearchResultItem/SearchResultItem';

interface SearchResultProps {
  searchResult: UserResponse[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResult }) => {
  if (searchResult.length === 0) return;

  return (
    <div className={classes['c-search-result']}>
      {searchResult.map((user) => (
        <SearchResultItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default SearchResult;
