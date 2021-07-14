import React from 'react';
import NavDesktop from '../../../../common/Nav/NavDesktop';
import TimeLineBookMarks from '../../components/Timelines/TimeLineBookMarks';

export default function BookMarks() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center'>
            <NavDesktop />
            <TimeLineBookMarks />
         </div>
      </>
   );
}
