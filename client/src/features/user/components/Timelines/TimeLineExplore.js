import React from 'react';
import { useSelector } from 'react-redux';
import ExploreHeader from '../../components/Explore/ExploreHeader';
import ExploreProfile from '../Explore/ExploreProfile';

export default function TimeLineExplore() {
   const { users } = useSelector((state) => state.user);
   const { currentUser } = useSelector((state) => state.user);

   return (
      <>
         <div className='bg-white-dark p-2 dark:bg-black w-full md:w-2/3 lg:w-2/5 m-4 rounded-md min-h-screen text-white'>
            <ExploreHeader />
            {users.map((user) => {
               return (
                  currentUser.id !== user.id && (
                     <ExploreProfile
                        key={user.id}
                        userDetails={user}
                        user={user}
                     />
                  )
               );
            })}
         </div>
      </>
   );
}
