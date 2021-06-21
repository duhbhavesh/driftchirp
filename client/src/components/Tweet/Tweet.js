import React from 'react';
import { FaRegComment, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';

export default function Tweet() {
   return (
      <>
         <article className='flex bg-black-light m-4 rounded-md'>
            <div class='flex flex-shrink-0 p-4 pb-0'>
               <a href='/' class='flex-shrink-0 block'>
                  <div class='flex items-center'>
                     <div>
                        <img
                           class='inline-block h-10 w-10 rounded-full'
                           src='https://pbs.twimg.com/profile_images/1299221468367077379/HCpW2wp7_400x400.jpg'
                           alt=''
                        />
                     </div>
                  </div>
               </a>
            </div>
            <div className='flex flex-col'>
               <div class='ml-2 mt-3'>
                  <div className='flex items-center'>
                     <span class='text-base leading-6 font-medium text-white'>
                        Bhavesh Kasturi
                     </span>
                     <span class='ml-2 text-sm font-medium text-gray-400'>
                        @duhbhavesh · 16 June
                     </span>
                  </div>

                  <p class='text-base width-auto font-medium text-white flex-shrink'>
                     The art of programming is the skill of controlling
                     complexity. - Eloquent JavaScript
                     <span className='text-blue'> #DEVCommunity</span>
                  </p>
               </div>
               <div class='flex'>
                  <div class='flex justify-start w-4/5'>
                     <div class='flex-1 py-2 m-2'>
                        <button class='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
                           <FaRegComment />
                        </button>
                     </div>

                     <div class='flex-1 py-2 m-2'>
                        <button class='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
                           <AiOutlineRetweet />
                        </button>
                     </div>

                     <div class='flex-1 py-2 m-2'>
                        <button class='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
                           <FaRegHeart />
                        </button>
                     </div>

                     <div class='flex-1 py-2 m-2'>
                        <button class='w-12 mx-auto mt-1 group flex justify-center text-gray-500 px-3 py-2 font-medium rounded-full hover:bg-blue hover:text-blue-300'>
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
