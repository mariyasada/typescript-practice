import { Product } from "../Types"

export enum ActionTypes{
    ADD_TO_CART="ADD_TO_CART",
    REMOVE_FROM_CART="REMOVE_FROM_CART",
    INCREASE_QUANTITY="INCREASE_QUANTITY",
    DECREASE_QUANTITY="DECREASE_QUANTITY",
    REMOVE_FROM_WISHLIST="REMOVE_FROM_WISHLIST",
    ADD_TO_WISHLIST="ADD_TO_WISHLIST",
    MOVE_TO_WISHLIST="MOVE_TO_WISHLIST",
    LOW_TO_HIGH="LOW_TO_HIGH",
    HIGH_TO_LOW="HIGH_TO_LOW",
    SET_CATEGORY="SET_CATEGORY",
    UNSET_CATEGORY="UNSET_CATEGORY",
    SET_RATINGS="SET_RATINGS",
    UNSET_RATINGS="UNSET_RATINGS",
    CLEAR_FILTERS="CLEAR_FILTERS"

}

export type addToCart={
  type:ActionTypes.ADD_TO_CART,
  payload:Product
}
export type removeFromCart={
    type:ActionTypes.REMOVE_FROM_CART,
    payload:Product
}
export type increaseQuantity={
    type:ActionTypes.INCREASE_QUANTITY,
    payload:Product
}
export type decreaseQuantity={
    type:ActionTypes.DECREASE_QUANTITY,
    payload:Product
}
export type addToWishlist ={
    type:ActionTypes.ADD_TO_WISHLIST,
    payload:Product
}
export type removeFromWishlist ={
    type:ActionTypes.REMOVE_FROM_WISHLIST,
    payload:Product
}
export type movetoWishlist ={
    type:ActionTypes.MOVE_TO_WISHLIST,
    payload:Product
}
export type sortbyPrice={
    type:ActionTypes.LOW_TO_HIGH | ActionTypes.HIGH_TO_LOW
}
export type sortbycategory={
    type:ActionTypes.SET_CATEGORY |ActionTypes.UNSET_CATEGORY,
    payload:string
}
export type sortbyratings={
    type:ActionTypes.SET_RATINGS | ActionTypes.UNSET_RATINGS,
    payload:string
}

export type Actions= addToCart |addToWishlist |removeFromCart|removeFromWishlist|increaseQuantity|decreaseQuantity|movetoWishlist
export type filterActions=sortbyPrice | sortbycategory | sortbyratings