import React, { createContext, useReducer } from "react";
import { products } from "./../products";
import { reducer } from "./AppReducer";

// Initial state
const initialState = {
  products: products,
  cart: [],
  searched: [],
  user: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  // Call useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  function updateQuantity(update) {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: update,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  }

  function searchProducts(text) {
    dispatch({
      type: "SEARCH",
      payload: text,
    });
  }

  function getUser(user) {
    dispatch({
      type: "GET_USER",
      payload: user,
    });
  }

  function emptyCart() {
    dispatch({
      type: "EMPTY_CART",
      payload: [],
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        searched: state.searched,
        addToCart,
        updateQuantity,
        removeFromCart,
        searchProducts,
        user: state.user,
        getUser,
        emptyCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
