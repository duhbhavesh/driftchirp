import React, { useEffect } from 'react';
import Tweet from '../Tweet/Tweet';
import TweetCard from '../../../tweet/components/Tweet/TweetCard';
import { handleFetchFeed } from '../../tweetSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Timeline() {
   const { tweets, tweetsStatus, tweetPostStatus } = useSelector(
      (state) => state.tweet,
   );
   const { token } = useSelector((state) => state.user);
   const dispatch = useDispatch();
   useEffect(() => {
      if (tweetsStatus === 'idle') {
         dispatch(handleFetchFeed({ token }));
      }
   }, []);

   useEffect(() => {
      if (tweetPostStatus === 'success') {
         dispatch(handleFetchFeed({ token }));
      }
   }, [tweetPostStatus]);

   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <TweetCard />
            {tweets?.map((tweet) => {
               return <Tweet key={tweet.id} tweetDetails={tweet} />;
            })}
         </div>
      </>
   );
}
