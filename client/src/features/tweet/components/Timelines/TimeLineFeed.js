import React from 'react';
import Tweet from '../Tweet/Tweet';
import TweetCard from '../../../tweet/components/Tweet/TweetCard';

export default function Timeline() {
   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <TweetCard />
            <Tweet />
         </div>
      </>
   );
}
