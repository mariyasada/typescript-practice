import React from "react";
import { useCart } from "../../Context/CartContext";
import { CartContextType } from "../../Types";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Product } from "../../Types";

const Cart = () => {
  const { state } = useCart() as CartContextType;
  const { cartList } = state;
  return (
    <div
      style={{
        display: "grid",
        marginTop: "5rem",
        gridTemplateColumns: "repeat(4,18rem)",
      }}
    >
      {cartList?.map((product: Product) => {
        return (
          <ProductCard key={product.id} product={product} renderFor="cart" />
        );
      })}
    </div>
  );
};

export default Cart;
