import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileFormEditButton from './ProfileFormEditButton';
import { handleEditProfile } from '../../userSlice';

export default function ProfileEditForm({ setIsOpen }) {
   const { token, currentUser } = useSelector((state) => state.user);
   const [bio, setBio] = useState(currentUser.bio);
   const [website, setWebsite] = useState(currentUser.website);
   const dispatch = useDispatch();

   return (
      <>
         <form className='w-full'>
            <div className='flex flex-wrap'>
               <div className='p-2 w-1/2'>
                  <div className='relative'>
                     <label
                        htmlFor='name'
                        className='leading-7 text-sm text-black dark:text-white'>
                        First Name
                     </label>
                     <div className='w-full bg-gray-300 dark:bg-black bg-opacity-50 rounded border border-gray-300 dark:border-black-light focus:border-blue-light focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                        {currentUser.firstName}
                     </div>
                  </div>
               </div>
               <div className='p-2 w-1/2'>
                  <div className='relative'>
                     <label
                        htmlFor='email'
                        className='leading-7 text-sm text-black dark:text-white'>
                        Last Name
                     </label>
                     <div className='w-full bg-gray-300 dark:bg-black bg-opacity-50 rounded border border-gray-300 dark:border-black-light focus:border-blue-light focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                        {currentUser.lastName}
                     </div>
                  </div>
               </div>
               <div className='p-2 w-full'>
                  <div className='relative'>
                     <label
                        htmlFor='bio'
                        className='leading-7 text-sm text-black dark:text-white'>
                        Bio
                     </label>
                     <textarea
                        type='text'
                        id='bio'
                        name='bio'
                        defaultValue={currentUser.bio}
                        onChange={(e) => setBio(e.target.value)}
                        className='resize-none w-full bg-gray-100 dark:bg-black-lightest bg-opacity-50 rounded border border-gray-300 dark:border-black-light focus:border-blue-light focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                     />
                  </div>
               </div>
               <div className='p-2 w-full'>
                  <div className='relative'>
                     <label
                        htmlFor='website'
                        className='leading-7 text-sm text-black dark:text-white'>
                        Website
                     </label>
                     <input
                        type='url'
                        id='website'
                        name='website'
                        onChange={(e) => setWebsite(e.target.value)}
                        defaultValue={currentUser.website}
                        className='resize-none w-full bg-gray-100 dark:bg-black-lightest bg-opacity-50 rounded border border-gray-300 dark:border-black-light focus:border-blue-light focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                     />
                  </div>
               </div>
            </div>

            <ProfileFormEditButton
               setIsOpen={setIsOpen}
               token={token}
               dispatch={dispatch}
               handleEditProfile={handleEditProfile}
               bio={bio}
               website={website}
            />
         </form>
      </>
   );
}
