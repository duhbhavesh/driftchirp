import React from 'react';
import FollowButton from '../Buttons/FollowButton';

export default function ExploreProfile() {
   return (
      <>
         <div className='flex items-center bg-white dark:bg-black-light text-black-dark dark:text-white m-3 rounded-md'>
            <div className='flex flex-shrink-0 p-4'>
               <a href='/' className='flex-shrink-0 block'>
                  <div className='flex items-center'>
                     <div>
                        <img
                           className='inline-block h-10 w-10 rounded-full'
                           src='https://pbs.twimg.com/profile_images/1299221468367077379/HCpW2wp7_400x400.jpg'
                           alt=''
                        />
                     </div>
                  </div>
               </a>
            </div>
            <div className='flex md items-center flex-col md:flex-row w-full justify-around'>
               <div className='ml-2'>
                  <div className='flex items-center'>
                     <span className='text-base leading-6 font-medium'>
                        Bhavesh Kasturi
                     </span>
                     <span className='ml-2 text-sm font-medium text-gray-400'>
                        @duhbhavesh
                     </span>
                  </div>
               </div>
               <div className='ml-2 pr-2 mt-4 pb-4'>
                  <FollowButton />
               </div>
            </div>
         </div>
      </>
   );
}
