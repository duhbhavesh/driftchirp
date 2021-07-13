import React from 'react';
import FollowButton from '../Buttons/FollowButton';
import { useSelector } from 'react-redux';

export default function ExploreProfile({ userDetails, user }) {
   const { firstName, lastName, username } = userDetails;
   const { currentUser } = useSelector((state) => state.user);

   return (
      <>
         <div className='flex items-center bg-white dark:bg-black-light text-black-dark dark:text-white m-3 rounded-md'>
            <div className='flex flex-shrink-0 p-4'>
               <a href='/' className='flex-shrink-0 block'>
                  <div className='flex items-center'>
                     <div>
                        <img
                           className='inline-block h-10 w-10 rounded-full'
                           src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                           alt=''
                        />
                     </div>
                  </div>
               </a>
            </div>
            <div className='flex md items-center flex-col md:flex-row w-full justify-between'>
               <div className='ml-2'>
                  <div className='flex items-center'>
                     <span className='text-base leading-6 font-medium'>
                        {firstName} {lastName}
                     </span>
                     <span className='ml-2 text-sm font-medium text-gray-400'>
                        @{username}
                     </span>
                  </div>
               </div>
               <div className='ml-2 pr-2 mt-4 pb-4'>
                  {currentUser.id !== userDetails.id && (
                     <FollowButton user={user} />
                  )}
               </div>
            </div>
         </div>
      </>
   );
}
