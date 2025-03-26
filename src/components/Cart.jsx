
// src/components/Cart.js
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Modal from "./Modal"; // Import the Modal component
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [phoneNumber, setPhoneNumber] = useState(""); // State to store phone number

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (productId, e) => {
    const quantity = parseInt(e.target.value);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  // Handle M-Pesa payment
  const handleMpesaPayment = () => {
    setIsModalOpen(true); // Open the modal
  };

  // Handle payment submission
  const handlePaymentSubmit = () => {
    if (phoneNumber) {
      alert(`Payment of ksh${totalPrice.toFixed(2)} via M-Pesa is being processed for ${phoneNumber}.`);
      setIsModalOpen(false); // Close the modal
      setPhoneNumber(""); // Reset phone number
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <div className="cart">
      <h2>Cart Order</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>ksh{item.price.toFixed(2)}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                  min="1"
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Display total price */}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: ksh{totalPrice.toFixed(2)}</h3>
        </div>
      )}

      {/* Payment Section */}
      {cart.length > 0 && (
        <div className="payment-section">
          <h3>Payment Method</h3>
          <button onClick={handleMpesaPayment}>Pay via M-Pesa</button>
        </div>
      )}

      {/* Custom Modal for Phone Number Input */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Enter Your M-Pesa Phone Number</h3>
        <input
          type="text"
          placeholder="e.g., 2547XXXXXXXX"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="phone-input"
        />
        <button onClick={handlePaymentSubmit} className="submit-button">
          Submit Payment
        </button>
      </Modal>

      <button onClick={() => window.history.back()}>Close</button>
    </div>
  );
};

export default Cart;