import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { NavData } from './NavData';

export default function NavDesktop() {
   const {
      currentUser: { username, firstName, lastName },
   } = useSelector((state) => state.user);

   return (
      <>
         <div className='sticky top-10 hidden md:flex md:w-56 justify-center bg-white-dark dark:bg-black m-4 rounded-md  h-4/5 mr-4'>
            <div className='flex flex-col justify-between py-2'>
               <nav className='mt-5 px-2 h-80 mb-32'>
                  {NavData.map((item) => {
                     return (
                        <>
                           <NavLink
                              key={item.id}
                              activeClassName='bg-blue-light text-white'
                              className='flex items-center px-6 py-3 mb-2 text-base font-semibold rounded-full text-black-dark dark:text-white hover:bg-blue-light hover:text-white'
                              to={item.link}>
                              <span className='text-xl'>{item.icon}</span>
                              <span className='ml-2'>{item.label}</span>
                           </NavLink>
                        </>
                     );
                  })}
                  <NavLink
                     activeClassName='bg-blue-light text-white'
                     className='flex items-center px-6 py-3 mb-12 text-base font-semibold rounded-full text-black-dark dark:text-white hover:bg-blue-light hover:text-white'
                     to={`/profile/${username}`}>
                     <span className='text-xl'>
                        <FaUser />
                     </span>
                     <span className='ml-2'>Profile</span>
                  </NavLink>

                  <Link to='/feed'>
                     <button className='bg-blue-dark w-full mt-5 hover:bg-blue-dark text-white font-bold py-3 px-7 rounded-full'>
                        Tweet
                     </button>
                  </Link>
               </nav>

               <div className='flex-shrink-0 flex rounded-full p-4 mb-24 mr-2'>
                  <Link
                     to={`/profile/${username}`}
                     className='flex-shrink-0 block'>
                     <div className='flex items-center'>
                        <div>
                           <img
                              className='inline-block h-10 w-10 rounded-full'
                              src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                              alt=''
                           />
                        </div>
                        <div className='ml-3'>
                           <p className='text-base leading-6 font-medium text-black-dark dark:text-white'>
                              {firstName} {lastName}
                           </p>
                           <p className='text-sm leading-5 font-medium text-gray-400'>
                              @{username}
                           </p>
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}
