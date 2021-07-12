import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './features/user/pages/Auth/PrivateRoute';
import { Toast } from './common/Toast/Toast';
import { setTheme, setUser } from './common/utils/utils';
import { useDispatch } from 'react-redux';
import { setToken } from './features/user/userSlice';
import Header from './common/Header/Header';
import SignIn from './features/user/pages/Auth/SignIn';
import SignUp from './features/user/pages/Auth/SignUp';
import Feed from './features/tweet/pages/Feed/Feed';
import Explore from './features/user/pages/Explore/Explore';
import Notifications from './features/notification/pages/Notifications/Notifications';
import Profile from './features/user/pages/Profile/Profile';

export default function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      setTheme();
      setUser(dispatch, setToken);
   }, []);

   return (
      <div>
         <Header />
         <Toast />
         <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <PrivateRoute path='/feed' element={<Feed />} />
            <PrivateRoute path='/explore' element={<Explore />} />
            <PrivateRoute path='/notifications' element={<Notifications />} />
            <PrivateRoute path='/profile' element={<Profile />} />
         </Routes>
      </div>
   );
}
