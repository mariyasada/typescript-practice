import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import { Product, productContextType } from '../../Types'
import ProductCard from '../../Components/ProductCard/ProductCard';
import style from "./Products.module.css"

const Products = () => {
    const {products}=useProduct() as productContextType;
  return (
    <div className={style.container}>{products?.map((product:Product)=>{
        return <ProductCard key={product.id} product={product}/>
    })}</div>
  )
}

export default Products