import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../../components/Profile/ProfileCard';
import { handleFetchUserTweets } from '../../userSlice';
import PorfileTweet from '../Profile/ProfileTweet';

export default function TimeLineProfile() {
   const dispatch = useDispatch();
   const { token, userTweets } = useSelector((state) => state.user);

   useEffect(() => {
      if (token) {
         dispatch(handleFetchUserTweets({ token }));
      }
   }, []);

   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <ProfileCard />
            {userTweets.map((tweet) => {
               return <PorfileTweet tweetDetails={tweet} />;
            })}
         </div>
      </>
   );
}
