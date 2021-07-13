import React from 'react';
import Tweet from '../../../tweet/components/Tweet/Tweet';
import ExploreHeader from '../../components/Explore/ExploreHeader';
import ExploreProfile from '../Explore/ExploreProfile';

export default function TimeLineExplore() {
   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/3 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <ExploreHeader />
            <ExploreProfile />
         </div>
      </>
   );
}
