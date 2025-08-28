import React from 'react';
import { useCart } from '../contextss/Carts';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, setCartItems } = useCart();

  const handleRemove = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="py-4">
      <h2>Your Cart</h2>
      <ListGroup>
        {cartItems.map((item, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <img src={item.imageUrl} width={60} style={{ marginRight: 10 }} />
              {item.name} — ₹{item.price}
            </div>
            <Button variant="danger" size="sm" onClick={() => handleRemove(index)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="mt-3">Total: ₹{total}</h4>
      <div className="text-Right pb-3">
    <Link to="/login">
  <Button
    variant="warning"
    onClick={() => setCartItems([])}
  >
    Buy Now
  </Button>
</Link>

  </div>
    </Container>
  );
};

export default Cart;