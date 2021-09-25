import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { NavData } from './NavData';
import TweetModal from '../../features/tweet/components/Tweet/TweetModal';
import { handleFetchUserProfile } from '../../features/user/userSlice';

export default function NavDesktop() {
   const {
      token,
      currentUser: { username, firstName, lastName },
   } = useSelector((state) => state.user);
   const dispatch = useDispatch();

   const [isOpen, setIsOpen] = useState(false);

   function handleOpenModal() {
      setIsOpen(true);
   }

   function handleCloseModal() {
      setIsOpen(false);
   }

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
                              activeClassName='bg-white dark:bg-black-light text-blue-light'
                              className='flex items-center px-6 py-3 mb-2 text-base rounded-full text-black-lightest dark:text-white hover:bg-blue-lightest hover:bg-opacity-5 dark:hover:bg-black-lightest font-extrabold'
                              to={item.link}>
                              <span className='text-xl'>{item.icon}</span>
                              <span className='ml-2'>{item.label}</span>
                           </NavLink>
                        </>
                     );
                  })}
                  <NavLink
                     activeClassName='bg-white dark:bg-black-light text-blue-light'
                     className='flex items-center px-6 py-3 mb-2 text-base rounded-full text-black-lightest dark:text-white hover:bg-blue-lightest hover:bg-opacity-5 dark:hover:bg-black-lightest font-extrabold'
                     to={`/profile/${username}`}
                     onClick={() =>
                        dispatch(
                           handleFetchUserProfile({
                              username: username,
                              token,
                           }),
                        )
                     }>
                     <span className='text-xl'>
                        <FaUser />
                     </span>
                     <span className='ml-2'>Profile</span>
                  </NavLink>

                  <button
                     onClick={() => handleOpenModal()}
                     className='bg-blue-dark w-full mt-5 hover:bg-blue-dark text-white font-bold py-3 px-7 rounded-full'>
                     Tweet
                  </button>
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

         <TweetModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleCloseModal={handleCloseModal}
         />
      </>
   );
}
