import React from 'react';
import NavDesktop from '../../../../common/Nav/NavDesktop';
import NavMobile from '../../../../common/Nav/NavMobile';
import TimeLineFeed from '../../components/Timelines/TimeLineFeed';

export default function Feed() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center mb-16'>
            <NavDesktop />
            <NavMobile />
            <TimeLineFeed />
         </div>
      </>
   );
}
