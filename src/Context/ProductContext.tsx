import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  Product,
  productContextType,
  ProviderProps,
  filterinitialState,
} from "../Types";
import axios from "axios";
import { filterActions } from "../actions/actions";
import { filterReducer } from "./Reducer/FilterReducer";
import { composeFunction, functionList } from "./compose";

export const ProductContext = createContext<productContextType | undefined>(
  undefined
);

export const initialState: filterinitialState = {
  sortByCategory: [],
  sortByPrice: "",
  sortByRating: [],
};

export const ProductProvider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterState, filterDispatch] = useReducer<
    React.Reducer<filterinitialState, filterActions>
  >(filterReducer, initialState);
  const showProductList = composeFunction(
    filterState,
    functionList
  )([...products]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("something went wrong", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        filterState,
        filterDispatch,
        showProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
