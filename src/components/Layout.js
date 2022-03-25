import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AuthPage from "./AuthPage/AuthPage";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import SearchPage from "./SearchPage/SearchPage";
import Checkout from "./Checkout/Checkout";

function Layout() {
  const { pathname } = useLocation();
  const pathExclusionArray = ["/authpage", "/checkoutpage"];

  return (
    <>
      {pathExclusionArray.indexOf(pathname) < 0 && <Navbar />}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="authpage" element={<AuthPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="searchpage" element={<SearchPage />} />
        <Route path="checkoutpage" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default Layout;
