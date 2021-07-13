import React from 'react';

export default function ProfileImage() {
   return (
      <>
         <div className='md rounded-full relative'>
            <img
               className='md rounded-full relative border-4 border-white dark:border-gray-900 w-32 h-32'
               src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
               alt=''
            />
         </div>
      </>
   );
}
