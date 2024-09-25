import React from "react";
import { CartContextType, Product } from "../../Types";
import style from "./ProductCard.module.css";
import { useCart } from "../../Context/CartContext";
import { Actions, ActionTypes } from "../../actions/actions";

type productCardProps = {
  key: number;
  product: Product;
  renderFor?: "cart" | "wishlist" | "productpage";
};

const ProductCard = ({ product, renderFor }: productCardProps) => {
  const { state, dispatch } = useCart() as CartContextType;

  const addTocart = (product: Product) => {
    const isPresentInCart = state.cartList.find(
      (item) => item.id === product.id
    );
    if (isPresentInCart) {
      dispatch({ type: ActionTypes.INCREASE_QUANTITY, payload: product });
    } else {
      dispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
    }
  };
  return (
    <div className={style.productCard}>
      <div>
        <img src={product.image} alt={product.image} />
      </div>
      <div>
        <p>Name:{product.title}</p>
        <p>Category:{product.category}</p>
        <p>Price:{product.price}</p>
        <div>
          <p>Rating:{product.rating.rate}</p>
          <p>Count:{product.rating.count}</p>
        </div>
      </div>
      {renderFor === "productpage" && (
        <>
          <button onClick={() => addTocart(product)}>Add to cart</button>
          <button
            onClick={() =>
              dispatch({ type: ActionTypes.ADD_TO_WISHLIST, payload: product })
            }
          >
            Add to wishlist
          </button>
        </>
      )}
      <div>
        {renderFor === "cart" ? (
          <div>
            quantity:
            <div>
              {" "}
              <button
                onClick={() =>
                  dispatch({
                    type: ActionTypes.INCREASE_QUANTITY,
                    payload: product,
                  })
                }
              >
                add
              </button>
              {product.qty}
              <button
                onClick={
                  product.qty === 1
                    ? () =>
                        dispatch({
                          type: ActionTypes.REMOVE_FROM_CART,
                          payload: product,
                        })
                    : () =>
                        dispatch({
                          type: ActionTypes.DECREASE_QUANTITY,
                          payload: product,
                        })
                }
              >
                {product.qty === 1 ? "Delete" : "Minus"}
              </button>
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: ActionTypes.REMOVE_FROM_CART,
                    payload: product,
                  })
                }
              >
                Remove from Cart
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: ActionTypes.MOVE_TO_WISHLIST,
                    payload: product,
                  })
                }
              >
                Move to wishlist
              </button>
            </div>
          </div>
        ) : renderFor === "wishlist" ? (
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: ActionTypes.REMOVE_FROM_WISHLIST,
                  payload: product,
                })
              }
            >
              Remove from wishlist
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ActionTypes.ADD_TO_CART,
                  payload: product,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
