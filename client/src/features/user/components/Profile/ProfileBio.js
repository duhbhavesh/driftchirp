import React from 'react';
import ProfileStats from './ProfileStats';

export default function ProfileBio() {
   return (
      <>
         <div className='p-4 pt-0 space-y-3 justify-center w-full ml-3'>
            <div>
               <h2 className='text-xl leading-6 font-extrabold text-black-dark dark:text-white'>
                  Bhavesh Kasturi
               </h2>
               <p className='text-sm leading-5 font-medium text-gray-600 dark:text-gray-400'>
                  @duhbhavesh
               </p>
            </div>
            <div>
               <p className='text-black-dark dark:text-white leading-tight mb-2'>
                  What's Good? | Web Developer | JavaScript ❤ | Learning &
                  Growing with @neogcamp
               </p>
            </div>
            <div className='text-gray-600 dark:text-gray-400 flex'>
               <span className='leading-5 ml-1'>Joined December, 2019</span>
            </div>
            <ProfileStats />
         </div>
      </>
   );
}
