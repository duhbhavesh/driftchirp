import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
   return (
      <>
         <div className='flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg mt-10 mb-20'>
            <div className='w-full px-6 py-8 md:px-8 pt-10 pb-14'>
               <h2 className='text-2xl font-bold text-center text-black mb-8'>
                  Sign Up
               </h2>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     for='input-first-name'>
                     First Name
                  </label>
                  <input
                     id='input-first-name'
                     placeholder='John'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                  />
               </div>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     for='input-last-name'>
                     Last Name
                  </label>
                  <input
                     id='input-last-name'
                     placeholder='Smith'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                  />
               </div>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     for='input-last-name'>
                     Username
                  </label>
                  <input
                     id='input-user-name'
                     placeholder='john'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                  />
               </div>
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
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     for='input-password'>
                     Password
                  </label>
                  <input
                     id='input-password'
                     placeholder='password'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='password'
                  />
               </div>
               <div className='mt-8'>
                  <button className='w-full px-4 py-3 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
                     Sign Up!
                  </button>
               </div>
               <div className='flex items-center justify-between mt-4'>
                  <span className='w-1/5 border-b md:w-1/4'></span>
                  <Link
                     to='/login'
                     className='text-sm text-black hover:underline'>
                     Existing User? Login
                  </Link>
                  <span className='w-1/5 border-b md:w-1/4'></span>
               </div>
            </div>
         </div>
      </>
   );
}
