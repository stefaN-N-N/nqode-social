import React from 'react';
import UserResponse from 'src/model/UserResponse';
import classes from './SearchResultItem.module.scss';
interface SearchResultItemProps {
  user: UserResponse;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ user }) => {
  return (
    <div className={`${classes['c-search-result-item-container']}`}>
      {user.firstName + ' ' + user.lastName}
    </div>
  );
};

export default SearchResultItem;
