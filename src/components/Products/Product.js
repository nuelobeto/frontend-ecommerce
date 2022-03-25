import React, { useContext } from "react";
import "./Product.css";
import { GlobalContext } from "./../../context/GlobalState";

function Product({ product }) {
  const { products, addToCart, cart, updateQuantity } =
    useContext(GlobalContext);

  const handleAddToCart = (id) => {
    if (cart.some((product) => product.id === id)) {
      handleUpdateQuantity("plus", id);
    } else {
      const clickedProduct = products.find((product) => product.id === id);
      const newCartItem = {
        ...clickedProduct,
        quantity: 1,
      };
      addToCart(newCartItem);
    }
  };

  const handleUpdateQuantity = (action, id) => {
    let update = cart.map((product) => {
      let quantity = product.quantity;
      if (product.id === id) {
        if (action === "minus" && quantity > 1) {
          quantity--;
        } else if (action === "plus" && quantity < product.instock) {
          quantity++;
        }
      }
      return {
        ...product,
        quantity,
      };
    });
    updateQuantity(update);
  };

  return (
    <div className="product">
      <img src={product.imgSrc} alt="" />
      <p className="product-text">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <div className="overlay">
        <div className="opacity"></div>
        <span
          className="add-to-cart"
          onClick={() => handleAddToCart(product.id)}
        >
          add to cart
        </span>
      </div>
    </div>
  );
}

export default Product;
