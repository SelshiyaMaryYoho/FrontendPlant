
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contextss/Carts'; 
import '../linkpages/Payonline.css'

const Payonline = () => {
  const [cardNumber, setCardNumber] = useState('');
  const navigate = useNavigate();
  const { setCartItems } = useCart();

  const handlePayment = () => {
    if (!cardNumber) return alert('Please enter your card number');
  
    alert('Payment successful!');
    setCartItems([]);
    navigate('/thanks');
  };

  return (
    <div className="payment-page shadow-lg">
      <h2>Enter Card Details</h2>
      <input  className='shadow-lg'
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)
          
        }
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payonline;
