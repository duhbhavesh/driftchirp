import React from 'react';

export default function TweetTextArea() {
   return (
      <>
         <textarea
            placeholder="What's Happening?"
            className='p-2 bg-white dark:bg-black-light resize-none border-none rounded-md block w-full h-24'
         />
      </>
   );
}
