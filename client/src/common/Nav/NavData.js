import { FaHome, FaHashtag, FaBell, FaUser } from 'react-icons/fa';

export const NavData = [
   {
      id: 1,
      link: '/feed',
      text: 'Home',
      icon: <FaHome />,
   },
   {
      id: 2,
      link: '/explore',
      text: 'Explore',
      icon: <FaHashtag />,
   },
   {
      id: 3,
      link: '/notifications',
      text: 'Notifications',
      icon: <FaBell />,
   },
   {
      id: 4,
      link: '/profile',
      text: 'Profile',
      icon: <FaUser />,
   },
];
