import React from "react";
import { Product } from "../../Types";
import style from "./ProductCard.module.css";

type productCardProps = {
  key: number;
  product: Product;
};

const ProductCard = ({ product }: productCardProps) => {
  return (
    <div className={style.productCard}>
      <div>
        <img src={product.image} alt={product.image} />
      </div>
      <div>
        <span>{product.title}</span>
        <span>{product.category}</span>
        <span>{product.price}</span>
        <div>
          <span>{product.rating.rate}</span>
          <span>{product.rating.count}</span>
        </div>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductCard;
