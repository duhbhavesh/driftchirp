import React from 'react';
import NavDesktop from '../../components/Nav/NavDesktop';
import TimeLineProfile from '../../components/Timelines/TimeLineProfile';

export default function Profile() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center'>
            <NavDesktop />
            <TimeLineProfile />
         </div>
      </>
   );
}
