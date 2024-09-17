import React, { ReactNode } from "react"

export type UserData={
    email:string,
    password:string
}

export type AuthContextType={
    user:UserData,
    setUser:React.Dispatch<React.SetStateAction<UserData>>,
    loginHandler:(data:UserData)=>void,
    logoutHandler:()=>void
}

export type ProviderProps={
    children:ReactNode
}