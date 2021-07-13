import React from 'react';
import { FaRegComment, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';

export default function ProfileTweet({ tweetDetails }) {
   const { tweet, user, createdAt } = tweetDetails;

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
            <div className='flex flex-col'>
               <div className='ml-2 mt-3'>
                  <div className='flex items-center'>
                     <span className='text-base leading-6 font-medium'>
                        {user?.firstName} {user?.lastName}
                     </span>
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
                        <button className='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
                           <FaRegHeart />
                        </button>
                     </div>

                     <div className='flex-1 py-2 m-2'>
                        <button className='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
                           <FaRegBookmark />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </article>
      </>
   );
}
