import React, { useState } from 'react';
import TweetProfileImage from './TweetProfileImage';
import TweetTextArea from './TweetTextArea';
import { handlePostTweet } from '../../tweetSlice';
import { useSelector, useDispatch } from 'react-redux';
import TweetModalButton from './TweetModalButton';

export default function TweetModalPost({ setIsOpen }) {
   const [tweet, setTweet] = useState('');
   const { token } = useSelector((state) => state.user);
   const dispatch = useDispatch();

   return (
      <>
         <div className='p-2 bg-white dark:bg-black-light rounded-md'>
            <div className='p-2'>
               <div className='relative items-start flex w-full'>
                  <div className='mr-3'>
                     <TweetProfileImage />
                  </div>
                  <div className='flex flex-col w-11/12'>
                     <div>
                        <TweetTextArea tweet={tweet} setTweet={setTweet} />
                     </div>
                     <div className='flex w-full justify-end'>
                        <TweetModalButton
                           tweet={tweet}
                           token={token}
                           dispatch={dispatch}
                           handlePostTweet={handlePostTweet}
                           setTweet={setTweet}
                           setIsOpen={setIsOpen}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
