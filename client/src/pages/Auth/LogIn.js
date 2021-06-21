import React from 'react';
import { Link } from 'react-router-dom';

export default function LogIn() {
   return (
      <>
         <div className='flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg mt-20'>
            <div className='w-full px-6 py-8 md:px-8 pt-10 pb-14'>
               <h2 className='text-2xl font-bold text-center text-black mb-8'>
                  Login to Driftchirp!
               </h2>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     for='input-email'>
                     Email Address
                  </label>
                  <input
                     id='input-email'
                     placeholder='name@example.com'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='email'
                  />
               </div>
               <div className='mt-4'>
                  <div className='flex justify-between'>
                     <label
                        className='block mb-2 text-sm font-medium text-black-light'
                        for='input-password'>
                        Password
                     </label>
                     <a
                        href='/'
                        className='text-xs text-black-lightest hover:underline'>
                        Forget Password?
                     </a>
                  </div>
                  <input
                     id='input-password'
                     placeholder='password'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='password'
                  />
               </div>
               <div className='mt-8'>
                  <button className='w-full px-4 py-3 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
                     Log In
                  </button>
               </div>
               <div className='flex items-center justify-between mt-4'>
                  <span className='w-1/5 border-b md:w-1/4'></span>
                  <Link
                     to='/signup'
                     className='text-sm text-black hover:underline'>
                     Or Create an Account
                  </Link>
                  <span className='w-1/5 border-b md:w-1/4'></span>
               </div>
            </div>
         </div>
      </>
   );
}
