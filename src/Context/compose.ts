import { filterinitialState, Product, FilterFunction } from "../Types"

export const composeFunction=(state:filterinitialState,functionList:FilterFunction[])=>(products:Product[]):Product[]=>{
  return functionList.reduce((acc,currfun)=>{
       return currfun(state,acc)
  },products)
}

const productSortByPrice:FilterFunction=(state:filterinitialState,products:Product[]):Product[]=>{    
    if(state.sortByPrice ==="LOW_TO_HIGH")
    {  
        return products.sort((a,b)=> a.price- b.price)
    }
    else if(state.sortByPrice ==="HIGH_TO_LOW")
    {  
        return products.sort((a,b)=> b.price- a.price)
    }
    else return products;
}
const productSortBycategory:FilterFunction=(state:filterinitialState,products:Product[])=>{
    const categoryList = state.sortByCategory;
    return categoryList.length === 0 ? products:
    products.filter((item)=>categoryList.some((category)=>category===item.category))
}

const productSortByRatings:FilterFunction=(state:filterinitialState,products:Product[])=>{
    const ratingList = state.sortByRating;
    return ratingList.length === 0 ? products:
    products.filter((item)=>ratingList.some((rating)=> Number(rating) === Math.floor(item.rating.rate)))
}

export const functionList:FilterFunction[]=[productSortByPrice,productSortBycategory,productSortByRatings]