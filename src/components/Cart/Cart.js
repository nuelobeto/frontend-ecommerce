import React, { useContext } from "react";
import "./Cart.css";
import { GlobalContext } from "./../../context/GlobalState";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, emptyCart, user } = useContext(GlobalContext);

  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };

  const handleCheckout = () => {
    if (!user) {
      alert("Please log in before you checkout");
      navigate("/authpage");
    } else {
      emptyCart();
      navigate("/checkoutpage");
    }
  };

  return (
    <div className="cart" id="cart">
      <div className="container">
        <h3 className="total">Total Price: ${totalPrice()}</h3>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p style={{ marginTop: "30px", fontSize: "20px" }}>
              Your cart is empty
            </p>
          ) : (
            cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          )}
        </div>
        {cart.length === 0 ? (
          <></>
        ) : (
          <div className="check-out" onClick={handleCheckout}>
            <h3>Proceed to checkout</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
