import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProfileHeader() {
   return (
      <>
         <div className='pb-2 bg-white-dark dark:bg-black rounded-tl-md rounded-tr-md'>
            <div className='flex py-4 pl-5 bg-white dark:bg-black-light rounded-md'>
               <div className='flex items-center mb-0 text-xl font-bold text-black-dark dark:text-white'>
                  <div className='mr-3'>
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
         </div>
      </>
   );
}
