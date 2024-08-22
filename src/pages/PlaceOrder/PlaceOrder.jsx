import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import SuccessMsg from "../SuccessMsg/SuccessMsg";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate(); // useNavigate hook

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);

    // After a successful order, navigate to a different page if needed:
    navigate("/successmsg"); // Uncomment if you want to navigate to a success page
  };

  return orderPlaced ? (
    <SuccessMsg />
  ) : (
    <form className="place-order" onSubmit={handlePlaceOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="text" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>₹
              {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}
            </div>
            <button type="submit">Proceed to payment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
