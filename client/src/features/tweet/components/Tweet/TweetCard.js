import React from 'react';
import TweetHeader from './TweetHeader';
import TweetProfileImage from './TweetProfileImage';
import TweetTextArea from './TweetTextArea';
import TweetButton from './TweetButton';

export default function TweetCard() {
   return (
      <>
         <TweetHeader />
         <div className='p-2 bg-white dark:bg-black-light rounded-md'>
            <div className='p-2'>
               <div className='relative items-start flex w-full'>
                  <div className='mr-3'>
                     <TweetProfileImage />
                  </div>
                  <div className='flex flex-col w-11/12'>
                     <div>
                        <TweetTextArea />
                     </div>
                     <div className='flex w-full justify-end'>
                        <TweetButton />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
