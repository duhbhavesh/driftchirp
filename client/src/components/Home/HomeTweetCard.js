import React from 'react';
import HomeHeader from './HomeHeader';
import HomeProfileImage from './HomeProfileImage';
import HomeTweetTextArea from './HomeTweetTextArea';
import HomeTweetButton from './HomeTweetButton';

export default function HomeTweetCard() {
   return (
      <>
         <HomeHeader />
         <div className='p-2 bg-white dark:bg-black-light rounded-md'>
            <div className='p-2'>
               <div className='relative items-start flex w-full'>
                  <div className='mr-3'>
                     <HomeProfileImage />
                  </div>
                  <div className='flex flex-col w-11/12'>
                     <div>
                        <HomeTweetTextArea />
                     </div>
                     <div className='flex w-full justify-end'>
                        <HomeTweetButton />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
