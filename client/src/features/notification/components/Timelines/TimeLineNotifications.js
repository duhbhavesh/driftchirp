import React from 'react';
import NotificationHeader from '../Notification/NotificationHeader';

export default function TimeLineNotifications() {
   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <NotificationHeader />
         </div>
      </>
   );
}
