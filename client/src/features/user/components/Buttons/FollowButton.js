import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkFollow } from '../../../../common/utils/utils';
import { handleFollow, handleUnFollow, handleFetchUser } from '../../userSlice';

export default function FollowButton({ user }) {
   const dispatch = useDispatch();
   const { token, currentUser } = useSelector((state) => state.user);

   const handleFollowSubmit = async () => {
      await dispatch(handleFollow({ id: user.id, token }));
      await dispatch(
         handleFetchUser({ username: currentUser.username, token }),
      );
   };

   const handleUnFollowSubmit = async () => {
      await dispatch(handleUnFollow({ id: user.id, token }));
      await dispatch(
         handleFetchUser({ username: currentUser.username, token }),
      );
   };
   return (
      <>
         {!checkFollow(currentUser.following, user.id) ? (
            <button
               onClick={() => handleFollowSubmit()}
               className='px-10 py-2 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
               Follow
            </button>
         ) : (
            <button
               onClick={() => handleUnFollowSubmit()}
               className='px-10 py-2 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
               Following
            </button>
         )}
      </>
   );
}
