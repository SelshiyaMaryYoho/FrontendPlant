import React, { useState } from 'react';
import { useCart } from '../contextss/Carts';
import { useNavigate } from 'react-router-dom';
import './BuyNow.css';

const BuyNow = () => {
  const [payment, setPayment] = useState('');
  const { setCartItems } = useCart();
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!payment) return alert('Please select a payment method.');
     if (payment === 'Cash on Delivery') {
    alert(`Order placed using: ${payment}`);
    setCartItems([]);
    navigate('/thanks');
  } else if (payment === 'Online Payment') {
    navigate('/payonline'); 
  }
  };

  return (
    <div className="buynow-container">
      <h2 className="buynow-title">Select Payment Method</h2>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="Cash on Delivery"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
          />
          Cash on Delivery
        </label>
        <label>
          <input
            type="radio"
            value="Online Payment"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
          />
          Online Payment
        </label>
      </div>
      <button className="confirm-button" onClick={handleConfirm}>
        Confirm Order
      </button>
    </div>
  );
};

export default BuyNow;
