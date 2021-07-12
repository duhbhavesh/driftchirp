import React from 'react';

export default function ProfileImage() {
   return (
      <>
         <div className='md rounded-full relative'>
            <img
               className='md rounded-full relative border-4 border-white dark:border-gray-900 w-32 h-32'
               src='https://pbs.twimg.com/profile_images/1299221468367077379/HCpW2wp7_400x400.jpg'
               alt=''
            />
         </div>
      </>
   );
}
