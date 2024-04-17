import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { HiOutlineUser } from 'react-icons/hi2';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';

export const navItems = [
  { name: 'Feed', path: '/home', icon: HiOutlineHome },
  { name: 'Messages', path: '/messages', icon: HiOutlineChatBubbleBottomCenterText },
  { name: 'Profile', path: '/profile', icon: HiOutlineUser },
  { name: 'Friends', path: '/friends', icon: HiOutlineUserGroup },
  { name: 'Requests', path: '/requests', icon: HiOutlineUserPlus },
  { name: 'Settings', path: '/settings', icon: HiOutlineCog6Tooth }
];
