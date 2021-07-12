import React from 'react';
import Tweet from '../../../tweet/components/Tweet/Tweet';
import ProfileCard from '../../components/Profile/ProfileCard';

export default function TimeLineProfile() {
   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <ProfileCard />
            <Tweet />
         </div>
      </>
   );
}
