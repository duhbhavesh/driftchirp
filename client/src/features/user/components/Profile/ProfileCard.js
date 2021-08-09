import React, { useEffect, useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import ProfileCover from './ProfileCover';
import ProfileImage from './ProfileImage';
import ProfileEditButton from './ProfileEditButton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { handleFetchUserProfile } from '../../userSlice';
import ProfileStats from './ProfileStats';
import ProfileModal from './ProfileModal';
import FollowButton from '../Buttons/FollowButton';

export default function ProfileCard() {
   const { username } = useParams();
   const dispatch = useDispatch();
   const { token, userProfile, currentUser } = useSelector(
      (state) => state.user,
   );
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      if (token) {
         dispatch(handleFetchUserProfile({ username, token }));
      }
   }, []);

   function handleOpenModal() {
      setIsOpen(true);
   }

   function handleCloseModal() {
      setIsOpen(false);
   }

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
                     {currentUser?.id !== userProfile?.id ? (
                        <FollowButton user={userProfile} />
                     ) : (
                        <ProfileEditButton handleOpenModal={handleOpenModal} />
                     )}
                  </div>
               </div>
            </div>
            <div className='p-4 pt-0 space-y-3 justify-center w-full ml-3'>
               <ProfileBio user={userProfile} />
               <ProfileStats user={userProfile} />
            </div>
         </div>
         <ProfileModal
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            setIsOpen={setIsOpen}
         />
      </>
   );
}
