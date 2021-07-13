import React from 'react';

export default function TweetButton({
   tweet,
   dispatch,
   token,
   setTweet,
   handlePostTweet,
}) {
   const handleTweetSubmit = () => {
      if (tweet) {
         dispatch(handlePostTweet({ tweet, token }));
         setTweet('');
      }
   };

   return (
      <>
         <button
            onClick={() => {
               console.log('click working');
               handleTweetSubmit();
            }}
            className='bg-blue-light w-24 mt-5 hover:bg-blue-dark text-white font-bold py-2 px-2 rounded-full disabled:opacity-50'>
            Tweet
         </button>
      </>
   );
}
