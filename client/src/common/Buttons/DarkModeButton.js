import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const DarkModeButton = () => {
   const [darkMode, setDarkMode] = useState(false);

   const isDark = () =>
      (localStorage && localStorage.theme === 'dark') ||
      (!('theme' in localStorage) &&
         window.matchMedia('(prefers-color-scheme: dark)').matches);

   const getThemeString = (isDark) => (isDark ? 'dark' : 'light');

   const handleButtonToggle = () => {
      localStorage.theme = getThemeString(!darkMode);
      if (localStorage.theme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
      setDarkMode(!darkMode);
   };

   useEffect(() => {
      setDarkMode(isDark());
   }, []);

   const isDarkModeActive = document.documentElement.classList.contains('dark');
   return (
      <button
         className='text-2xl sm:text-3xl text-dark-black dark:text-white focus:outline-none m-4'
         onClick={() => handleButtonToggle()}
         key={isDarkModeActive ? 'dark-icon' : 'light-icon'}>
         {isDarkModeActive ? <FiSun /> : <FiMoon />}
      </button>
   );
};

export default DarkModeButton;
