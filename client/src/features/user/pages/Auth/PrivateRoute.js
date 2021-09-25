import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ path, ...props }) => {
   const { token } = useSelector((state) => state.user);
   const location = useLocation();
   return token ? (
      <Route {...props} path={path} />
   ) : (
      <Navigate state={{ from: location.pathname }} replace to='/signin' />
   );
};
