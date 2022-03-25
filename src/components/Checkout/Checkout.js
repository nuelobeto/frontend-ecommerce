import React from "react";
import "./Checkout.css";
import checkout from "../../checkout-image/checkout.jpg";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="checkout-container">
        <h1>Thanks for Shopping with us, come back soon!</h1>
        <div className="checkout-img">
          <img src={checkout} alt="" />
        </div>
        <button onClick={() => navigate("/")}>Continue shopping</button>
      </div>
    </div>
  );
}

export default Checkout;
