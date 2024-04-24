import React from 'react';
import UserResponse from 'src/model/UserResponse';
import classes from './SearchResultItem.module.scss';
import { useNavigate } from 'react-router-dom';

interface SearchResultItemProps {
  user: UserResponse;
  setSearchResult: React.Dispatch<React.SetStateAction<UserResponse[]>>;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ user, setSearchResult }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setSearchResult([]);
    navigate(`profile/${user.id}`);
  };
  return (
    <div className={`${classes['c-search-result-item']}`} onClick={handleClick}>
      {`${user.firstName} ${user.lastName}`}
    </div>
  );
};

export default SearchResultItem;
