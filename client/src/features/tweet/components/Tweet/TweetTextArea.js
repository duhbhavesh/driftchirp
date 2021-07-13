import React from 'react';

export default function TweetTextArea({ tweet, setTweet }) {
   const handleOnChangeInput = (e) => {
      setTweet(e.target.value);
   };

   return (
      <>
         <textarea
            onChange={(e) => handleOnChangeInput(e)}
            value={tweet}
            placeholder="What's Happening?"
            className='p-2 bg-white dark:bg-black-light resize-none border-none rounded-md block w-full h-24'
         />
      </>
   );
}
