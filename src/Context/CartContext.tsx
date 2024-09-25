import { createContext, useContext, useReducer } from "react";
import { ProviderProps, CartContextType, cartState } from "../Types";
import { cartReducer } from "./Reducer/CartReducer";
import { Actions } from "../actions/actions";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const initialState: cartState = {
  cartList: [],
  wishList: [],
};

export const CartProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer<React.Reducer<cartState, Actions>>(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
