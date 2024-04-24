import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navigation.module.scss';
import { IconType } from 'react-icons';
import UserResponse from 'src/model/UserResponse';

interface NavigationProps {
  navItems: { name: string; path: string; icon?: IconType }[];
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const location = useLocation();
  const [user, setUser] = useState<UserResponse>();

  const isNavLinkActive = useCallback(
    (to: string) => {
      return location.pathname.includes(to);
    },
    [location]
  );

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, []);

  return (
    <nav className={`${classes['c-navigation']}`}>
      <ul className={`${classes['c-navigation__container']}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path.includes('profile') ? `${item.path}/${user?.id}` : item.path}
              className={`${classes['c-navigation__nav-link']} ${isNavLinkActive(item.path) && classes['c-navigation__nav-link--active']}`}
            >
              {item.icon && (
                <item.icon
                  className={`${classes['c-navigation__nav-icon']} ${isNavLinkActive(item.path) && classes['c-navigation__nav-icon--active']}`}
                />
              )}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
