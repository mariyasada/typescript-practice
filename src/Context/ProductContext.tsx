import { createContext, useState, useContext, useEffect } from "react";
import { Product, productContextType, ProviderProps } from "../Types";
import axios from "axios";


export const ProductContext = createContext<productContextType | undefined>(
  undefined
);

export const ProductProvider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading,setLoading]=useState<boolean>(false);

  useEffect(()=>{
    const fetchData=async()=>{
        try {
            setLoading(true);
            const {data}= await axios.get("https://fakestoreapi.com/products");
            setProducts(data);
            setLoading(false);
            
          } catch (error) {
            console.error("something went wrong",error)
          }
          finally{
            setLoading(false);
          }
    }
    fetchData();
  },[])


  return (
    <ProductContext.Provider value={{ products, setProducts,loading,setLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = ()=>useContext(ProductContext);
