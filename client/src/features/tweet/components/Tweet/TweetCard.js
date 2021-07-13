import React, { useState } from 'react';
import TweetHeader from './TweetHeader';
import TweetProfileImage from './TweetProfileImage';
import TweetTextArea from './TweetTextArea';
import TweetButton from './TweetButton';
import { handlePostTweet } from '../../tweetSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function TweetCard() {
   const [tweet, setTweet] = useState('');
   const { token } = useSelector((state) => state.user);
   const dispatch = useDispatch();

   return (
      <>
         <TweetHeader />
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
                        <TweetButton
                           tweet={tweet}
                           token={token}
                           dispatch={dispatch}
                           handlePostTweet={handlePostTweet}
                           setTweet={setTweet}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
