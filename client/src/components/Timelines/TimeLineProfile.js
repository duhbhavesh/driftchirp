import React from 'react';
import Tweet from '../Tweet/Tweet';
import ProfileCard from '../Profile/ProfileCard';

export default function TimeLineProfile() {
   return (
      <>
         <div className='bg-white-dark dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <ProfileCard />
            <Tweet />
         </div>
      </>
   );
}
