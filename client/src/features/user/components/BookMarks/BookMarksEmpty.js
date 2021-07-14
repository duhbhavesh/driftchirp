import React from 'react';

export default function BookMarksEmpty() {
   return (
      <div className='flex bg-white dark:bg-black-light text-black-dark py-10 dark:text-white m-3 rounded-md'>
         <div className='flex justify-center w-full'>
            <p className='text-base width-auto font-medium flex-shrink'>
               You haven't Bookmarked anything yet!
            </p>
         </div>
      </div>
   );
}
