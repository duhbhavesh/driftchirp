import React from 'react';
import Tweet from '../Tweet/Tweet';

export default function Timeline() {
   return (
      <>
         <div className='bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <Tweet />
         </div>
      </>
   );
}
