import React from 'react';
import { NavData } from './NavData';
import { Link } from 'react-router-dom';

export default function NavDesktop() {
   return (
      <>
         <div className='hidden md:flex md:w-56 justify-center bg-white-dark dark:bg-black m-4 rounded-md mr-4'>
            <div className='flex flex-col justify-between py-2'>
               <nav className='mt-5 px-2 h-80'>
                  {NavData.map((navlink) => {
                     return (
                        <>
                           <Link
                              className='flex items-center px-4 py-3 mb-2 text-base font-semibold rounded-full text-black-dark dark:text-white hover:bg-blue-light hover:text-white'
                              key={navlink.id}
                              to={navlink.link}>
                              <span className='text-xl'>{navlink.icon}</span>
                              <span className='ml-2'>{navlink.text}</span>
                           </Link>
                        </>
                     );
                  })}
                  <button className='bg-blue-light w-full mt-5 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full'>
                     Tweet
                  </button>
               </nav>

               <div className='flex-shrink-0 flex rounded-full p-4 mb-24 mr-2'>
                  <a href='/' className='flex-shrink-0 block'>
                     <div className='flex items-center'>
                        <div>
                           <img
                              className='inline-block h-10 w-10 rounded-full'
                              src='https://pbs.twimg.com/profile_images/1299221468367077379/HCpW2wp7_400x400.jpg'
                              alt=''
                           />
                        </div>
                        <div className='ml-3'>
                           <p className='text-base leading-6 font-medium text-black-dark dark:text-white'>
                              Bhavesh Kasturi
                           </p>
                           <p className='text-sm leading-5 font-medium text-gray-400'>
                              @duhbhavesh
                           </p>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div />
         </div>
      </>
   );
}
