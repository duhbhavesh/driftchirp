import React from 'react';
import NavDesktop from '../../../../common/Nav/NavDesktop';
import NavMobile from '../../../../common/Nav/NavMobile';

import TimeLineExplore from '../../components/Timelines/TimeLineExplore';

export default function Explore() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center mb-16'>
            <NavDesktop />
            <NavMobile />
            <TimeLineExplore />
         </div>
      </>
   );
}
