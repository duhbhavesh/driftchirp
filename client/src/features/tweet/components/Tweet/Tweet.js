import React from 'react';
import {
   FaRegComment,
   FaRegHeart,
   FaRegBookmark,
   FaHeart,
   FaBookmark,
} from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { handleToggleBookMark, handleToggleLike } from '../../tweetSlice';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookMarks, checkLikes } from '../../../../common/utils/utils';

export default function Tweet({ tweetDetails }) {
   const { tweet, user, createdAt, _id } = tweetDetails;
   const { token, currentUser } = useSelector((state) => state.user);
   const dispatch = useDispatch();

   const handleToggleLikeSubmit = async () => {
      await dispatch(handleToggleLike({ id: _id, token }));
   };

   const handleToggleBookMarkSubmit = async () => {
      await dispatch(handleToggleBookMark({ id: _id, token }));
   };

   return (
      <>
         <article className='flex bg-white dark:bg-black-light text-black-dark dark:text-white m-3 rounded-md'>
            <div className='flex flex-shrink-0 p-4 pb-0'>
               <a href='/' className='flex-shrink-0 block'>
                  <div className='flex items-center'>
                     <div>
                        <img
                           className='inline-block h-10 w-10 rounded-full'
                           src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'
                           alt=''
                        />
                     </div>
                  </div>
               </a>
            </div>
            <div className='flex flex-col w-full'>
               <div className='ml-2 mt-3'>
                  <div className='flex items-center'>
                     <Link to={`/profile/${user.username}`}>
                        <span className='text-base leading-6 font-medium'>
                           {user?.firstName} {user?.lastName}
                        </span>
                     </Link>

                     <span className='text-sm font-medium text-gray-400 ml-1'>
                        @{user?.username} · {createdAt}
                     </span>
                  </div>

                  <p className='text-base width-auto font-medium flex-shrink'>
                     {tweet}
                  </p>
               </div>
               <div className='flex'>
                  <div className='flex justify-start w-4/5'>
                     <div className='flex-1 py-2 m-2'>
                        <button className='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
                           <FaRegComment />
                        </button>
                     </div>

                     <div className='flex-1 py-2 m-2'>
                        <button className='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
                           <AiOutlineRetweet />
                        </button>
                     </div>

                     <div className='flex-1 py-2 m-2'>
                        {!checkLikes(currentUser.liked, _id) ? (
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
                        {!checkBookMarks(currentUser.bookmarked, _id) ? (
                           <button
                              onClick={() => handleToggleBookMarkSubmit()}
                              className='w-12 mx-auto mt-1 group flex justify-center px-3 py-2 font-medium rounded-full text-gray-500 hover:bg-blue hover:text-blue-300'>
                              <FaRegBookmark />
                           </button>
                        ) : (
                           <button
                              onClick={() => handleToggleBookMarkSubmit()}
                              className='w-12 mx-auto mt-1 group flex justify-center px-3 py-2 font-medium rounded-full text-red-500 hover:bg-blue hover:text-blue-300'>
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
