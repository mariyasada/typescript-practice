import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./Pages/Login/Login";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products/Products";
import RequiresAuth from "./RequiresAuth";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Products />}></Route>
        <Route
          path="/cart"
          element={<RequiresAuth children={<Cart />}></RequiresAuth>}
        ></Route>
        <Route
          path="/wishlist"
          element={<RequiresAuth children={<Wishlist />}></RequiresAuth>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
