import React from 'react';
import NavDesktop from '../../../../common/Nav/NavDesktop';
import TimeLineExplore from '../../components/Timelines/TimeLineExplore';

export default function Explore() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center'>
            <NavDesktop />
            <TimeLineExplore />
         </div>
      </>
   );
}
