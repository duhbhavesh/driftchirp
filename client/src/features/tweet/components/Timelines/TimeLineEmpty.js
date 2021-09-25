import React from 'react';
import { Link } from 'react-router-dom';

export default function TimeLineEmpty() {
   return (
      <div className='flex bg-white dark:bg-black-light text-black-dark py-10 dark:text-white m-3 rounded-md'>
         <div className='flex flex-col mx-auto justify-center w-full'>
            <p className='text-base mx-auto width-auto font-medium flex-shrink'>
               You haven't followed anyone yet!
            </p>
            <Link to='/explore' className='inline-block mx-auto'>
               <button className='bg-blue-dark mt-5 hover:bg-blue-dark text-white font-bold py-2 px-10 rounded-full'>
                  Get Started
               </button>
            </Link>
         </div>
      </div>
   );
}
