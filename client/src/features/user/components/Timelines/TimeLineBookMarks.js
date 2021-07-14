import React, { useEffect } from 'react';
import BookMarksHeader from '../BookMarks/BookMarksHeader';
import { useDispatch, useSelector } from 'react-redux';
import ProfileTweet from '../Profile/ProfileTweet';
import { handleFetchUser, handleFetchUserProfile } from '../../userSlice';
import BookMarksEmpty from '../BookMarks/BookMarksEmpty';

export default function TimeLineBookMarks() {
   const { userProfile, currentUser, token } = useSelector(
      (state) => state.user,
   );
   const { tweetBookmarkStatus } = useSelector((state) => state.tweet);
   const dispatch = useDispatch();

   useEffect(() => {
      if (tweetBookmarkStatus === 'success') {
         dispatch(
            handleFetchUserProfile({ username: currentUser.username, token }),
         );
      }
   }, [tweetBookmarkStatus]);
   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/4 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <BookMarksHeader />
            {userProfile?.bookmarked?.length === 0 ? (
               <BookMarksEmpty />
            ) : (
               userProfile?.bookmarked?.map((tweet) => {
                  return <ProfileTweet key={tweet.id} tweetDetails={tweet} />;
               })
            )}

            {}
         </div>
      </>
   );
}
