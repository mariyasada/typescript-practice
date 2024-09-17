import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { AuthContextType } from '../../Types'
import { useNavigate } from 'react-router';
import style from "./Header.module.css"

const Header = () => {
    const {user,logoutHandler,loginHandler}=useAuth() as AuthContextType;
    const [isUserLoggedIn,setIsUserLoggedIn]=useState<boolean>(false);
    const navigate=useNavigate();

    const clickHandler=()=>{
        if(user){
            logoutHandler();
        }
        else{
          navigate("/")
        }
    }
    useEffect(()=>{
        if(Object.keys(user)?.length>0){
            setIsUserLoggedIn(true)
        }
        else{
            setIsUserLoggedIn(false);
        }
     
    },[user,clickHandler,loginHandler])

  return (
    <div className={style.header}>
        <span onClick={()=>navigate("/productpage")}>Products</span>
        <span onClick={clickHandler}>{ !isUserLoggedIn? "Login":"Logout"}</span>
    </div>
  )
}

export default Header