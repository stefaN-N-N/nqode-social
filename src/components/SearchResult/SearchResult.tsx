import React from 'react';
import UserResponse from 'src/model/UserResponse';
import classes from './SearchResult.module.scss';
import SearchResultItem from '../core/SearchResultItem/SearchResultItem';

interface SearchResultProps {
  searchResult: UserResponse[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResult }) => {
  if (searchResult.length === 0) return null;
  return (
    <div className={classes['c-search-result-container']}>
      {searchResult.map((result) => (
        <SearchResultItem user={result} key={result.id} />
      ))}
    </div>
  );
};

export default SearchResult;
