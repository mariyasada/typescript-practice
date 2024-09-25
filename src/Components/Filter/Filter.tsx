import React from "react";
import { category, price, ratings } from "./constant";
import { useProduct } from "../../Context/ProductContext";
import { productContextType } from "../../Types";
import { ActionTypes } from "../../actions/actions";

const Filter = () => {
  const { filterState, filterDispatch } = useProduct() as productContextType;

  const setFilter = (price: string) => {
    if (price === "high-to-low") {
      filterDispatch({ type: ActionTypes.HIGH_TO_LOW });
    } else {
      filterDispatch({ type: ActionTypes.LOW_TO_HIGH });
    }
  };

  function setCategoryHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let checkedCategory = event.target.checked;
    const categoryName = event.target.value;
    if (checkedCategory) {
      filterDispatch({ type: ActionTypes.SET_CATEGORY, payload: categoryName });
    } else {
      filterDispatch({
        type: ActionTypes.UNSET_CATEGORY,
        payload: categoryName,
      });
    }
  }

  function setRatingsHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let checkedRatings = event.target.checked;
    const RatingsName = event.target.value;
    if (checkedRatings) {
      filterDispatch({ type: ActionTypes.SET_RATINGS, payload: RatingsName });
    } else {
      filterDispatch({ type: ActionTypes.UNSET_RATINGS, payload: RatingsName });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        marginTop: "5rem",
        cursor: "pointer",
      }}
    >
      <div>
        <span style={{ fontSize: "20px", gap: "3rem" }}>Category</span>
        <div style={{ marginTop: "2rem" }}>
          {category?.map((category) => {
            return (
              <div
                style={{ display: "flex", gap: "0rem", width: "fit-content" }}
              >
                <input
                  type="checkbox"
                  style={{ width: "fit-content" }}
                  value={category}
                  checked={filterState.sortByCategory.includes(category)}
                  onChange={(event) => setCategoryHandler(event)}
                />
                <div key={category}>{category}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <span style={{ fontSize: "20px", gap: "3rem" }}>Rating</span>
        <div style={{ marginTop: "2rem" }}>
          {ratings?.map((rating) => {
            return (
              <div
                style={{ display: "flex", gap: "0rem", width: "fit-content" }}
              >
                <input
                  type="checkbox"
                  style={{ width: "fit-content" }}
                  value={rating}
                  //   checked={filterState?.sortByRating?.includes(rating)}
                  onChange={(event) => setRatingsHandler(event)}
                />
                <span key={rating}>{rating}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <span style={{ fontSize: "20px", gap: "3rem" }}>Price</span>
        <div style={{ marginTop: "2rem" }}>
          {price?.map((price) => {
            return (
              <div
                style={{ display: "flex", gap: "0rem", width: "fit-content" }}
                onClick={() => setFilter(price)}
              >
                <input
                  type="radio"
                  name="sort-btn"
                  style={{ width: "fit-content" }}
                  //   checked={filterState.sortByPrice === price}
                />
                <span key={price}>{price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
