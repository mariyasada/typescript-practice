import React from "react";
import { useProduct } from "../../Context/ProductContext";
import { Product, productContextType } from "../../Types";
import ProductCard from "../../Components/ProductCard/ProductCard";
import style from "./Products.module.css";
import Filter from "../../Components/Filter/Filter";

const Products = () => {
  const { products, showProductList } = useProduct() as productContextType;
  return (
    <div>
      <Filter />
      <div className={style.container}>
        {showProductList?.map((product: Product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              renderFor="productpage"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
