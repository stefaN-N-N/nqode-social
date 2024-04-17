import { Link, useLocation } from 'react-router-dom';
import classes from './Navigation.module.scss';
import React, { useCallback } from 'react';
import { IconType } from 'react-icons';

interface NavigationProps {
  navItems: { name: string; path: string; icon?: IconType }[];
}

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const location = useLocation();

  const isNavLinkActive = useCallback(
    (to: string) => {
      return location.pathname.includes(to);
    },
    [location]
  );

  return (
    <nav className={`${classes['c-navigation']}`}>
      <ul className={`${classes['c-navigation__container']}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
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
