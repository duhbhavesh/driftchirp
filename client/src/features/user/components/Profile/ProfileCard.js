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
            <ProfileBio />
         </div>
      </>
   );
}
