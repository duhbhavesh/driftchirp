import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { handleUserSignIn } from '../../userSlice';

export default function LogIn() {
   const navigate = useNavigate();
   const [user, setUser] = useState({
      email: 'test@gmail.com',
      password: 'Test123',
   });

   const { token, signInStatus, signInError } = useSelector(
      (state) => state.user,
   );
   const dispatch = useDispatch();
   const notify = (message) => toast.success(message);

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      await dispatch(
         handleUserSignIn({ email: user.email, password: user.password }),
      );
   };

   useEffect(() => {
      if (token) {
         navigate('/feed');
      }
   });

   useEffect(() => {
      if (signInStatus === 'signInSuccess') {
         navigate('/feed');
         notify('Successfully Logged In!');
      }
   }, [signInStatus]);

   return (
      <>
         <div className='flex max-w-sm m-8 mt-20 mb-20 md:mx-auto overflow-hidden bg-white rounded-xl shadow-lg '>
            <form
               className='w-full px-6 py-8 md:px-8 pt-10 pb-14'
               onSubmit={(e) => handleFormSubmit(e)}>
               <h2 className='text-2xl font-bold text-center text-black mb-8'>
                  Login to Driftchirp!
               </h2>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-email'>
                     Email Address
                  </label>
                  <input
                     id='input-email'
                     placeholder='name@example.com'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='email'
                     name='email'
                     value={user.email}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
               </div>
               <div className='mt-4'>
                  <div className='flex justify-between'>
                     <label
                        className='block mb-2 text-sm font-medium text-black-light'
                        htmlFor='input-password'>
                        Password
                     </label>
                  </div>
                  <input
                     id='input-password'
                     placeholder='password'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='password'
                     name='password'
                     value={user.password}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
               </div>
               <div className='mt-8'>
                  <button className='w-full px-4 py-3 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
                     Log In
                  </button>
               </div>
               <div className='text-red-500 text-center font-bold mt-4'>
                  {signInError}
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
            </form>
         </div>
      </>
   );
}
