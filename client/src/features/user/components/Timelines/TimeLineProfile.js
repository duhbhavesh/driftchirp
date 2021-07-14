import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../../components/Profile/ProfileCard';
import { handleFetchUser } from '../../userSlice';
import ProfileEmpty from '../Profile/ProfileEmpty';
import ProfileTweet from '../Profile/ProfileTweet';

export default function TimeLineProfile() {
   const { userProfile, currentUser, token } = useSelector(
      (state) => state.user,
   );
   const { tweetLikedStatus } = useSelector((state) => state.tweet);
   const dispatch = useDispatch();

   useEffect(() => {
      if (tweetLikedStatus === 'success') {
         dispatch(handleFetchUser({ username: currentUser.username, token }));
      }
   }, [tweetLikedStatus]);

   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <ProfileCard />
            {userProfile?.tweets?.length === 0 ? (
               <ProfileEmpty />
            ) : (
               userProfile?.tweets?.map((tweet) => {
                  return <ProfileTweet key={tweet.id} tweetDetails={tweet} />;
               })
            )}
         </div>
      </>
   );
}
