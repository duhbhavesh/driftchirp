import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import ProfileCover from './ProfileCover';
import ProfileImage from './ProfileImage';
import ProfileEditButton from './ProfileEditButton';

export default function ProfileCard() {
   return (
      <>
         <ProfileHeader />
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
         <ProfileBio />
         <hr className='dark:border-black-light'></hr>
      </>
   );
}
