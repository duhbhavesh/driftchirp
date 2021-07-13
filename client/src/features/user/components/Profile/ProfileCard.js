import React, { useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import ProfileCover from './ProfileCover';
import ProfileImage from './ProfileImage';
import ProfileEditButton from './ProfileEditButton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { handleFetchUserProfile, handleFetchUserTweets } from '../../userSlice';
import ProfileStats from './ProfileStats';

export default function ProfileCard() {
   const { username } = useParams();
   const dispatch = useDispatch();
   const { token, userProfile } = useSelector((state) => state.user);

   console.log('my', userProfile);

   useEffect(() => {
      if (token) {
         dispatch(handleFetchUserProfile({ username, token }));
      }
   }, []);

   return (
      <>
         <ProfileHeader user={userProfile} />
         <div className='p-2 bg-white dark:bg-black-light rounded-md'>
            <ProfileCover />
            <div className='p-4'>
               <div className='relative flex w-full'>
                  <div className='flex flex-1 -mt-24'>
                     <ProfileImage />
                  </div>
                  <div className='flex flex-col text-right'>
                     <ProfileEditButton />
                  </div>
               </div>
            </div>
            <div className='p-4 pt-0 space-y-3 justify-center w-full ml-3'>
               <ProfileBio user={userProfile} />
               <ProfileStats user={userProfile} />
            </div>
         </div>
      </>
   );
}
