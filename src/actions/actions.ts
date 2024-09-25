import { Product } from "../Types"

export enum ActionTypes{
    ADD_TO_CART="ADD_TO_CART",
    REMOVE_FROM_CART="REMOVE_FROM_CART",
    INCREASE_QUANTITY="INCREASE_QUANTITY",
    DECREASE_QUANTITY="DECREASE_QUANTITY",
    REMOVE_FROM_WISHLIST="REMOVE_FROM_WISHLIST",
    ADD_TO_WISHLIST="ADD_TO_WISHLIST",
    MOVE_TO_WISHLIST="MOVE_TO_WISHLIST"
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

export type Actions= addToCart |addToWishlist |removeFromCart|removeFromWishlist|increaseQuantity|decreaseQuantity|movetoWishlist