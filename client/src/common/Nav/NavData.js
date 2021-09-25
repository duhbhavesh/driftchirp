import { FaBookmark, FaHashtag, FaHome } from 'react-icons/fa';

export const NavData = [
   {
      id: 1,
      icon: <FaHome />,
      link: '/feed',
      label: 'Home',
   },
   {
      id: 2,
      icon: <FaHashtag />,
      link: '/explore',
      label: 'Explore',
   },
   {
      id: 3,
      icon: <FaBookmark />,
      link: '/bookmarks',
      label: 'Bookmarks',
   },
];
