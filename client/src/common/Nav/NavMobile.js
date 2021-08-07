import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavData } from './NavData';

export default function NavMobile() {
   const {
      currentUser: { username },
   } = useSelector((state) => state.user);

   return (
      <div className='p-6 w-full bg-white-dark dark:bg-black fixed bottom-0 flex justify-around md:hidden z-10'>
         {NavData.map((item) => {
            return (
               <>
                  <NavLink
                     key={item.id}
                     exact
                     activeClassName='text-blue-light dark:text-blue-light'
                     className='flex items-center text-black dark:text-white'
                     to={item.link}>
                     <span className='text-xl'>{item.icon}</span>
                  </NavLink>
               </>
            );
         })}
         <NavLink
            activeClassName='text-blue-light dark:text-blue-light'
            className='flex items-center text-black dark:text-white'
            to={`/profile/${username}`}>
            <span className='text-xl'>
               <FaUser />
            </span>
         </NavLink>
      </div>
   );
}
