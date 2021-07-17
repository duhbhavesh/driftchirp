import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DarkModeButton from '../../common/Buttons/DarkModeButton';
import Logo from '../../logo.svg';
import { handleUserSignOut } from '../../features/user/userSlice';

export default function Header() {
   const { token } = useSelector((state) => state.user);
   const dispatch = useDispatch();

   return (
      <>
         <header className='bg-white-dark dark:bg-black'>
            <div className='container mx-auto flex p-3 pt-4 pl-2 pr-2 md:pl-8 md:pr-8 flex-col md:flex-row justify-between items-center'>
               <Link
                  to='/feed'
                  className='flex title-font font-bold items-center'>
                  <img className='h-8 w-8 mr-1' src={Logo} alt='' />
                  <span className='text-xl dark:text-white'>Driftchirp</span>
               </Link>
               <nav className='flex flex-wrap items-center text-base justify-center'>
                  {token ? (
                     <button
                        onClick={() => dispatch(handleUserSignOut())}
                        className='inline-flex items-center font-bold bg-gray-100 text-black-dark border-0 py-2 px-4 focus:outline-none  hover:bg-gray-200 rounded-full text-base mr-2'>
                        Log Out
                     </button>
                  ) : (
                     <Link to='/signin'>
                        <button className='inline-flex items-center font-bold bg-gray-100 text-black-dark border-0 py-2 px-4 focus:outline-none  hover:bg-gray-200 rounded-full text-base mr-2'>
                           Log In
                        </button>
                     </Link>
                  )}

                  {token ? null : (
                     <Link to='/signup'>
                        <button className='inline-flex items-center font-bold bg-blue text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-light rounded-full text-base'>
                           Sign Up
                        </button>
                     </Link>
                  )}
                  <DarkModeButton />
               </nav>
            </div>
         </header>
      </>
   );
}
