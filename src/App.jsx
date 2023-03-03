import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SharedNav from "./pages/SharedNav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Purchase from "./pages/Purchase";
import About from "./pages/About";
import Error from "./pages/Error";
import Discount from "./pages/Discount";
import NewProducts from "./pages/NewProducts";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Routes>
          <Route path="/" element={<SharedNav onShowCart={showCartHandler} />}>
            <Route index element={<Home />} />
            {/* {Nested routes from home} */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/about" element={<About />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/NewProducts" element={<NewProducts />} />
            {/* <Route element={<Cart />} onShowCart={showCartHandler}/> */}
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
