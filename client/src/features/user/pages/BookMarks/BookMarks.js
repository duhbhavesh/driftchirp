import React from 'react';
import NavDesktop from '../../../../common/Nav/NavDesktop';
import NavMobile from '../../../../common/Nav/NavMobile';
import TimeLineBookMarks from '../../components/Timelines/TimeLineBookMarks';

export default function BookMarks() {
   return (
      <>
         <div className='md:container mx-auto flex justify-center mb-16'>
            <NavDesktop />
            <NavMobile />
            <TimeLineBookMarks />
         </div>
      </>
   );
}
