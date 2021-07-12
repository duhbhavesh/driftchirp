import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { isValidPassword } from '../../../../common/utils/utils';
import { handleUserSignUp } from '../../userSlice';

export default function SignUp() {
   const navigate = useNavigate();
   const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
   });

   const [validationError, setValidationError] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
   });

   const dispatch = useDispatch();
   const { error, status } = useSelector((state) => state.user);
   const notify = (message) => toast.success(message);

   const handleOnChangeInput = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleFormValidation = () => {
      setValidationError({
         firstName: '',
         lastName: '',
         username: '',
         email: '',
         password: '',
      });
      let successValidation = true;
      if (!user.firstName) {
         setValidationError((error) => ({
            ...error,
            firstName: 'Please enter a valid name',
         }));
         successValidation = false;
      }

      if (!user.lastName) {
         setValidationError((error) => ({
            ...error,
            lastName: 'Please enter a valid name',
         }));
         successValidation = false;
      }

      if (!user.username) {
         setValidationError((error) => ({
            ...error,
            username: 'Please enter a username',
         }));
      }

      if (!user.email) {
         setValidationError((error) => ({
            ...error,
            email: 'Please enter a valid email',
         }));
         successValidation = false;
      }

      if (!user.password || !isValidPassword(user.password)) {
         setValidationError((error) => ({
            ...error,
            password:
               'Password must be 6 characters long & must contain Numbers',
         }));
         successValidation = false;
      }

      return successValidation;
   };

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      if (handleFormValidation(user, setValidationError)) {
         dispatch(handleUserSignUp(user));
      }
   };

   useEffect(() => {
      if (status === 'success') {
         navigate('/signin');
         notify('User Signed Up');
      }
   }, [status]);

   return (
      <>
         <div className='flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg mt-10 mb-20'>
            <form
               onSubmit={(e) => handleFormSubmit(e)}
               className='w-full px-6 py-8 md:px-8 pt-10 pb-14'>
               <h2 className='text-2xl font-bold text-center text-black mb-8'>
                  Sign Up
               </h2>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-first-name'>
                     First Name
                  </label>
                  <input
                     id='input-first-name'
                     placeholder='John'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                     name='firstName'
                     value={user.firstName}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {validationError.firstName && (
                     <small>*{validationError.firstName}</small>
                  )}
               </div>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-last-name'>
                     Last Name
                  </label>
                  <input
                     id='input-last-name'
                     placeholder='Smith'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                     name='lastName'
                     value={user.lastName}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {validationError.lastName && (
                     <small>*{validationError.lastName}</small>
                  )}
               </div>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-last-name'>
                     Username
                  </label>
                  <input
                     id='input-user-name'
                     placeholder='john'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                     name='username'
                     value={user.username}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {validationError.username && (
                     <small>*{validationError.username}</small>
                  )}
               </div>
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
                  {validationError.email && (
                     <small>*{validationError.email}</small>
                  )}
               </div>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-password'>
                     Password
                  </label>
                  <input
                     id='input-password'
                     placeholder='password'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='password'
                     name='password'
                     value={user.password}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {validationError.password && (
                     <small>*{validationError.password}</small>
                  )}
               </div>
               <div className='mt-8'>
                  <button
                     onClick={() => console.log('click')}
                     className='w-full px-4 py-3 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
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
               <div className='text-black-dark'>{error}</div>
            </form>
         </div>
      </>
   );
}
