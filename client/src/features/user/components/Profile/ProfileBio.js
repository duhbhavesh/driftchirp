import React from 'react';
import { formatDate } from '../../../../common/utils/utils';

export default function ProfileBio({ user }) {
   return (
      <>
         <div>
            <h2 className='text-xl leading-6 font-extrabold text-black-dark dark:text-white'>
               <span className='mr-1'>{user?.firstName}</span>
               <span className='mr-1'>{user?.lastName}</span>
            </h2>
            <p className='text-sm leading-5 font-medium text-gray-600 dark:text-gray-400'>
               @{user?.username}
            </p>
         </div>
         <div>
            <p className='text-black-dark dark:text-white leading-tight mb-2'>
               {user?.bio}
            </p>
         </div>
         <div className='text-gray-600 dark:text-gray-400 flex'>
            <span className='leading-5 ml-1'>
               Joined {formatDate(user?.createdAt)}
            </span>
         </div>
      </>
   );
}
