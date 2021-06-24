import React from 'react';
import NavDesktop from '../../components/Nav/NavDesktop';
import TimeLineNotifications from '../../components/Timelines/TimeLineNotifications';

export default function Notifications() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center'>
            <NavDesktop />
            <TimeLineNotifications />
         </div>
      </>
   );
}
