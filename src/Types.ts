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

export type Product={
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}

export type productContextType={
    products:Product[],
    setProducts:React.Dispatch<React.SetStateAction<Product[]>>,
    loading:boolean,
    setLoading:React.Dispatch<React.SetStateAction<boolean>>
}