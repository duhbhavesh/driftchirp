import { useEffect } from 'react';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/LogIn';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

export default function App() {
   useEffect(() => {
      if (
         localStorage.theme === 'dark' ||
         (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, []);

   return (
      <div>
         <Header />
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
         </Routes>
      </div>
   );
}
