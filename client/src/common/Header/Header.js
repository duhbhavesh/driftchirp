import { Link } from 'react-router-dom';
import DarkModeButton from '../../common/Buttons/DarkModeButton';

export default function Header() {
   return (
      <>
         <header className='bg-white-dark dark:bg-black'>
            <div className='container mx-auto flex p-2 pl-8 pr-8 md:flex-row justify-between items-center'>
               <Link
                  to='/feed'
                  className='flex title-font font-bold items-center'>
                  <img src='' alt='' />
                  <span className='text-xl dark:text-white'>Driftchirp</span>
               </Link>
               <nav className='flex flex-wrap items-center text-base justify-center'>
                  <Link to='/signin'>
                     <button className='inline-flex items-center font-bold bg-gray-100 text-black-dark border-0 py-2 px-4 focus:outline-none  hover:bg-gray-200 rounded-full text-base mr-2'>
                        Log In
                     </button>
                  </Link>
                  <Link to='/signup'>
                     <button className='inline-flex items-center font-bold bg-blue text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-light rounded-full text-base'>
                        Sign Up
                     </button>
                  </Link>
                  <DarkModeButton />
               </nav>
            </div>
         </header>
      </>
   );
}
