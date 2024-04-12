import React from 'react';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  children: JSX.Element[];
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <div className={`${classes['c-sidebar']}`}>{children}</div>;
};

export default Sidebar;
