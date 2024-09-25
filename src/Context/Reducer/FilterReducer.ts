import { filterActions } from "../../actions/actions";
import { filterinitialState } from "../../Types";

export const filterReducer=(state:filterinitialState,action:filterActions)=>{
    switch (action.type) {
        case "LOW_TO_HIGH" :
            return {...state,sortByPrice:"LOW_TO_HIGH"}

        case "HIGH_TO_LOW" :
            return {...state,sortByPrice:"HIGH_TO_LOW"}

            case "SET_CATEGORY":
                return {...state,sortByCategory:[...state.sortByCategory,action.payload]};
 
            case "UNSET_CATEGORY":
                 return{...state,sortByBrand:state.sortByCategory.filter((category)=>category !== action.payload)} 
                 
           case "SET_RATINGS":
                    return {...state,sortByRating:[...state.sortByRating,action.payload]};
     
            case "UNSET_RATINGS":
                     return{...state,sortByRating:state.sortByRating.filter((rating)=>rating !== action.payload)}      
               
    
        default:
         return state;
    }
 
    
}