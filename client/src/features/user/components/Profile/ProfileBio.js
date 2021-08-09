import React from 'react';
import { formatDate } from '../../../../common/utils/utils';
import { FaLink } from 'react-icons/fa';

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
            <p>
               {!user?.website ? null : (
                  <>
                     <FaLink className='text-gray-400 inline mr-1' />
                     <a
                        target='_blank'
                        rel='noreferrer'
                        href={user?.website}
                        className='text-blue-light leading-tight mb-2'>
                        {user?.website}
                     </a>
                  </>
               )}
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
