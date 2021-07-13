import React from 'react';

export default function ProfileStats({ user }) {
   return (
      <>
         <div className='flex justify-start items-start w-full'>
            <div className='text-center'>
               <span className='font-bold text-black-dark dark:text-white mr-1'>
                  {user?.followingCount}
               </span>
               <span className='text-gray-600 dark:text-gray-400'>
                  Following
               </span>
            </div>
            <div className='text-center px-3'>
               <span className='font-bold text-black-dark dark:text-white mr-1'>
                  {user?.followersCount}
               </span>
               <span className='text-gray-600 dark:text-gray-400'>
                  Followers
               </span>
            </div>
         </div>
      </>
   );
}
