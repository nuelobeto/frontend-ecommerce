import React, { useContext } from "react";
import "./CartItem.css";
import { GlobalContext } from "./../../context/GlobalState";

function CartItem({ product }) {
  const { cart, updateQuantity, removeFromCart } = useContext(GlobalContext);

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

  const handleDelete = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-item">
      <div className="image">
        <img src={product.imgSrc} alt="" />
      </div>
      <div className="title-price">
        <p className="text">{product.name}</p>
        <p className="price">${product.price}</p>
        <p>In Stock: {product.instock}</p>
        <div className="quantity">
          <button
            className="minus"
            onClick={() => handleUpdateQuantity("minus", product.id)}
          >
            -
          </button>
          <input className="" type="number" value={product.quantity} readOnly />
          <button
            className="plus"
            onClick={() => handleUpdateQuantity("plus", product.id)}
          >
            +
          </button>
        </div>
        <button className="removeItem" onClick={() => handleDelete(product.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
