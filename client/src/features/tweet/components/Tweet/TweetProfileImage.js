import React from 'react';

export default function TweetProfileImage() {
   return (
      <>
         <div className='rounded-full relative'>
            <img
               className='rounded-full relative w-10 h-10'
               src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
               alt=''
            />
         </div>
      </>
   );
}
