import React from 'react';
import NavDesktop from '../../../../common/Nav/NavDesktop';
import TimeLineFeed from '../../components/Timelines/TimeLineFeed';

export default function Feed() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center'>
            <NavDesktop />
            <TimeLineFeed />
         </div>
      </>
   );
}
