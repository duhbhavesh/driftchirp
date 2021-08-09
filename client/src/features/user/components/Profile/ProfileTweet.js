import React from 'react';
import { FaRegHeart, FaRegBookmark, FaHeart, FaBookmark } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
   handleToggleBookMark,
   handleToggleLike,
} from '../../../tweet/tweetSlice';
import {
   checkBookMarks,
   checkLikes,
   formatDate,
} from '../../../../common/utils/utils';
import { Link } from 'react-router-dom';
import { handleFetchUserProfile } from '../../userSlice';

export default function ProfileTweet({ tweetDetails }) {
   const { tweet, user, createdAt, id } = tweetDetails;
   const { token, currentUser } = useSelector((state) => state.user);

   const dispatch = useDispatch();
   const handleToggleLikeSubmit = async () => {
      await dispatch(handleToggleLike({ id: id, token }));
   };

   const handleToggleBookMarkSubmit = async () => {
      await dispatch(handleToggleBookMark({ id: id, token }));
      await dispatch(
         handleFetchUserProfile({ username: currentUser.username, token }),
      );
   };

   return (
      <>
         <article className='flex bg-white dark:bg-black-light text-black-dark dark:text-white mt-3 rounded-md'>
            <div className='flex flex-shrink-0 p-2 pt-4 pb-0'>
               <Link
                  to={`/profile/${user?.username}`}
                  className='flex-shrink-0 block'>
                  <div className='flex items-center'>
                     <div>
                        <img
                           className='inline-block h-10 w-10 rounded-full'
                           src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                           alt=''
                        />
                     </div>
                  </div>
               </Link>
            </div>
            <div className='flex flex-col w-full'>
               <div className='ml-2 mt-3'>
                  <div className='flex items-center'>
                     <Link to={`/profile/${user?.username}`}>
                        <span className='text-base leading-6 font-medium truncate md:overflow-visible'>
                           {user?.firstName} {user?.lastName}
                        </span>
                     </Link>

                     <span className='text-sm font-medium text-gray-400 ml-4 truncate w-20 md:w-full'>
                        <Link to={`/profile/${user?.username}`}>
                           @{user?.username}
                        </Link>
                        <span className='font-bold pl-2 pr-1'>·</span>
                        {formatDate(createdAt)}{' '}
                     </span>
                  </div>

                  <p className='text-base width-auto font-medium flex-shrink mt-2'>
                     {tweet}
                  </p>
               </div>
               <div className='flex'>
                  <div className='flex'>
                     <div className='flex-1 py-2 m-2'>
                        {!checkLikes(currentUser.liked, id) ? (
                           <button
                              onClick={() => handleToggleLikeSubmit()}
                              className='w-12 mx-auto mt-1 group flex justify-center px-3 py-2 font-medium rounded-full text-gray-500 hover:bg-blue hover:text-blue-300'>
                              <FaRegHeart />
                           </button>
                        ) : (
                           <button
                              onClick={() => handleToggleLikeSubmit()}
                              className='w-12 mx-auto mt-1 group flex justify-center px-3 py-2 font-medium rounded-full text-red-500 hover:bg-blue hover:text-blue-300'>
                              <FaHeart />
                           </button>
                        )}
                     </div>

                     <div className='flex-1 py-2 m-2'>
                        {!checkBookMarks(currentUser.bookmarked, id) ? (
                           <button
                              onClick={() => handleToggleBookMarkSubmit()}
                              className='w-12 mx-auto mt-1 group flex justify-center px-3 py-2 font-medium rounded-full text-gray-500 hover:bg-blue hover:text-blue-300'>
                              <FaRegBookmark />
                           </button>
                        ) : (
                           <button
                              onClick={() => handleToggleBookMarkSubmit()}
                              className='w-12 mx-auto mt-1 group flex justify-center px-3 py-2 font-medium rounded-full dark:text-gray-500 text-gray-300  hover:bg-blue hover:text-blue-300'>
                              <FaBookmark />
                           </button>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </article>
      </>
   );
}
