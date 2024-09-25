import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { AuthContextType, CartContextType } from "../../Types";
import { useNavigate } from "react-router";
import style from "./Header.module.css";
import { useCart } from "../../Context/CartContext";

const Header = () => {
  const { user, logoutHandler, loginHandler } = useAuth() as AuthContextType;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const { state } = useCart() as CartContextType;

  const clickHandler = () => {
    if (Object.keys(user)?.length > 0) {
      logoutHandler();
    } else {
      navigate("/login");
    }
  };
  //   useEffect(() => {
  //     if (Object.keys(user)?.length > 0) {
  //       setIsUserLoggedIn(true);
  //     } else {
  //       setIsUserLoggedIn(false);
  //     }
  //   }, [user, clickHandler, loginHandler]);

  return (
    <div className={style.header}>
      <span onClick={() => navigate("/")}>Products</span>
      <span onClick={clickHandler}>
        {Object.keys(user)?.length === 0 ? "Login" : "Logout"}
      </span>
      <span
        onClick={() => navigate("/cart")}
        style={{ color: state?.cartList?.length > 0 ? "blue" : "black" }}
      >
        Cart
      </span>
      <span
        onClick={() => navigate("/wishlist")}
        style={{ color: state?.wishList?.length > 0 ? "red" : "black" }}
      >
        Wishlist
      </span>
    </div>
  );
};

export default Header;
