/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    if(loading){
        return (
            <div className='h-100 w-100 flex justify-content-center align-item-center'>
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

          </div>
        )
    }

    if(user) return children;
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;