import React from 'react';
import { useSelector } from 'react-redux';
import ProfileCard from '../../components/Profile/ProfileCard';
import ProfileEmpty from '../Profile/ProfileEmpty';
import PorfileTweet from '../Profile/ProfileTweet';

export default function TimeLineProfile() {
   const { userProfile } = useSelector((state) => state.user);

   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <ProfileCard />
            {userProfile?.tweets.length === 0 ? (
               <ProfileEmpty />
            ) : (
               userProfile?.tweets.map((tweet) => {
                  return <PorfileTweet tweetDetails={tweet} />;
               })
            )}
         </div>
      </>
   );
}
