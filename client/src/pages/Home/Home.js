import React from 'react';
import NavDesktop from '../../components/Nav/NavDesktop';
import TimelineHome from '../../components/Timelines/TimelineHome';

export default function Home() {
   return (
      <div className='md:container mx-auto flex justify-center'>
         <NavDesktop />
         <TimelineHome />
      </div>
   );
}
