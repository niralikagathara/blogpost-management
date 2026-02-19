import React, { Children } from 'react';
import { Navigate, redirect } from 'react-router-dom';

const AuthGuard = ({
    children,
    required = true,
    redirect = "/login"
}) => {
    const Data = JSON.parse(localStorage.getItem("blog_lData"));
    const isAuthenticated = !!Data;

    if(required && !isAuthenticated){
        return <Navigate to={redirect} replace />;
    }

    if(!required && isAuthenticated){
        return <Navigate to="/dashboard" replace/>
    }  
  return  children;
};

export default AuthGuard
