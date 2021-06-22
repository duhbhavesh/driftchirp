import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProfileHeader() {
   return (
      <>
         <div className='py-3'>
            <div className='flex'>
               <div className='px-4 py-2 mx-2'>
                  <a href='/'>
                     <FiArrowLeft className='text-2xl rounded-full text-blue-400 hover:bg-black-light hover:text-blue-light' />
                  </a>
               </div>
               <div>
                  <h2 className='mb-0 text-xl font-bold text-black-dark dark:text-white'>
                     Bhavesh Kasturi
                  </h2>
                  <p className='mb-0 text-xs text-gray-600 dark:text-gray-400'>
                     118 Tweets
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}
