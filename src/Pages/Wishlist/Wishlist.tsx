import React from "react";
import { useCart } from "../../Context/CartContext";
import { CartContextType, Product } from "../../Types";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Wishlist = () => {
  const { state } = useCart() as CartContextType;
  const { wishList } = state;
  return (
    <div
      style={{
        display: "grid",
        marginTop: "5rem",
        gridTemplateColumns: "repeat(4,18rem)",
      }}
    >
      {wishList?.map((product: Product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            renderFor="wishlist"
          />
        );
      })}
    </div>
  );
};

export default Wishlist;
