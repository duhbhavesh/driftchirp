import React from 'react';

export default function HomeHeader() {
   return (
      <>
         <div className='pb-2 bg-white-dark dark:bg-black rounded-tl-md rounded-tr-md'>
            <div className='flex py-4 pl-5 bg-white dark:bg-black-light rounded-md'>
               <div className='mb-0 text-xl font-bold text-black-dark dark:text-white'>
                  Home
               </div>
            </div>
         </div>
      </>
   );
}
