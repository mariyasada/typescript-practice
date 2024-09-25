import React, { ReactNode } from "react"
import { Actions, filterActions } from "./actions/actions"

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
    qty:number,
    rating:{
        rate:number,
        count:number
    }
}

export type productContextType={
    products:Product[],
    setProducts:React.Dispatch<React.SetStateAction<Product[]>>,
    loading:boolean,
    setLoading:React.Dispatch<React.SetStateAction<boolean>>,
    filterState:filterinitialState,
    filterDispatch:React.Dispatch<filterActions>,
    showProductList:Product[]
}

export type cartState={
    cartList: Product[],
    wishList:Product[]
}
export type CartContextType={
    state:cartState,
    dispatch:React.Dispatch<Actions>
}

 export type filterinitialState= {
    sortByCategory: string[];
    sortByPrice:string ;
    sortByRating:   string[];
  };

  export type FilterFunction = (state: filterinitialState, products: Product[]) => Product[];