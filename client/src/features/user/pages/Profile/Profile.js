import React from 'react';
import NavDesktop from '../../../../common/Nav/NavDesktop';
import NavMobile from '../../../../common/Nav/NavMobile';
import TimeLineProfile from '../../components/Timelines/TimeLineProfile';

export default function Profile() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center mb-16'>
            <NavDesktop />
            <NavMobile />
            <TimeLineProfile />
         </div>
      </>
   );
}
