import React, { useEffect } from 'react';
import Tweet from '../Tweet/Tweet';
import TweetCard from '../../../tweet/components/Tweet/TweetCard';
import { handleFetchFeed } from '../../tweetSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchUser } from '../../../user/userSlice';
import TimeLineEmpty from './TimeLineEmpty';

export default function Timeline() {
   const {
      tweets,
      tweetsStatus,
      tweetPostStatus,
      tweetLikedStatus,
      tweetBookmarkStatus,
   } = useSelector((state) => state.tweet);
   const { token, userFollowStatus, userUnFollowStatus, currentUser } =
      useSelector((state) => state.user);
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

   useEffect(() => {
      if (userFollowStatus === 'success' || userUnFollowStatus === 'success') {
         dispatch(handleFetchFeed({ token }));
      }
   }, [userFollowStatus, userUnFollowStatus]);

   useEffect(() => {
      if (tweetLikedStatus === 'success') {
         dispatch(handleFetchUser({ username: currentUser.username, token }));
      }
   }, [tweetLikedStatus]);

   useEffect(() => {
      if (tweetBookmarkStatus === 'success') {
         dispatch(handleFetchUser({ username: currentUser.username, token }));
      }
   }, [tweetBookmarkStatus]);

   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <TweetCard />
            {tweets?.length === 0 ? (
               <TimeLineEmpty />
            ) : (
               tweets?.map((tweet) => {
                  return <Tweet key={tweet._id} tweetDetails={tweet} />;
               })
            )}
         </div>
      </>
   );
}
