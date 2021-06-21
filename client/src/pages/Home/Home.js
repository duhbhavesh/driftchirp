import React from 'react';
import NavDesktop from '../../components/Nav/NavDesktop';
import Timeline from '../../components/Timeline/Timeline';

export default function Home() {
   return (
      <div className='md:container mx-auto flex justify-center'>
         <NavDesktop />
         <Timeline />
      </div>
   );
}
