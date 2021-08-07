import React from 'react';
import FollowButton from '../Buttons/FollowButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ExploreProfile({ userDetails, user }) {
   const { firstName, lastName, username } = userDetails;
   const { currentUser } = useSelector((state) => state.user);

   return (
      <>
         <div className='flex items-center bg-white dark:bg-black-light text-black-dark dark:text-white m-0 md:pt-5 md:pb-5 mt-3 md:m-3 rounded-md'>
            <div className='flex flex-shrink-0'>
               <Link
                  to={`/profile/${username}`}
                  className='flex-shrink-0 block'>
                  <div className='flex items-center'>
                     <div className='pl-4 md:pr-4'>
                        <img
                           className='inline-block h-10 w-10 rounded-full'
                           src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                           alt=''
                        />
                     </div>
                  </div>
               </Link>
            </div>
            <div className='flex md items-center flex-col mt-4 md:mt-0 md:flex-row w-full justify-between'>
               <div className='ml-2'>
                  <div className='flex items-center'>
                     <Link to={`/profile/${username}`}>
                        <span className='text-base leading-6 font-medium truncate'>
                           {firstName} {lastName}
                        </span>
                     </Link>
                     <Link to={`/profile/${username}`}>
                        <span className='ml-2 text-sm font-medium text-gray-400'>
                           @{username}
                        </span>
                     </Link>
                  </div>
               </div>
               <div className='ml-2 pr-2 mt-4 pb-4'>
                  {currentUser.id !== userDetails.id && (
                     <FollowButton user={user} />
                  )}
               </div>
            </div>
         </div>
      </>
   );
}
