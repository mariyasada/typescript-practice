import { Actions } from "../../actions/actions";
import { cartState } from "../../Types";

export const cartReducer=(state:cartState, action:Actions):cartState=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return{...state,cartList:[...state.cartList,{...action.payload,qty:1}]}

        case "REMOVE_FROM_CART":
            return{...state,cartList:state.cartList.filter(product=>product.id !==action.payload.id)}  
                
        case "REMOVE_FROM_WISHLIST":
            return{...state,wishList:state.wishList.filter(product=>product.id !==action.payload.id)}  
                    
        case "ADD_TO_WISHLIST":
           return{...state,wishList:[...state.wishList,action.payload]}
                        
         case "MOVE_TO_WISHLIST":
           return{...state,wishList:[...state.wishList,action.payload],cartList:state.cartList.filter(product=>product.id !==action.payload.id)}             
                        
          
         case "INCREASE_QUANTITY":
            return {...state,cartList:state.cartList?.map(product=>product.id===action.payload.id?{...product,qty: product.qty+1}:product)}
            
        case "DECREASE_QUANTITY":
                return {...state,cartList:state.cartList?.map(product=>product.id===action.payload.id?{...product,qty: product.qty-1}:product)}      
                    
                        
               
            
        default:
            return state; 
    }
}