import React from 'react';

export default function ProfileCover() {
   return (
      <>
         <div className='w-full bg-cover bg-no-repeat bg-center h-auto'>
            <img
               className='rounded-md'
               src='https://pbs.twimg.com/profile_banners/1207570391478104067/1593924235/1500x500'
               alt='Cover'
            />
         </div>
      </>
   );
}
