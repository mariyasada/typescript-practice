import React from 'react'
import { Navigate,useLocation } from 'react-router'
import { useAuth } from './Context/AuthContext'
import { AuthContextType, ProviderProps } from './Types'


const RequiresAuth = ({children}:ProviderProps) => {
    const {user}=useAuth() as AuthContextType;
    const location=useLocation();
  return  user?children:<Navigate to="/login" replace state={{from:location}}/>
}

export default RequiresAuth