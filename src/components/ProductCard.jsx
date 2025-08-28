import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import '../components/ProductCard.css'
import { useCart } from '../contextss/Carts';
import { Button} from 'react-bootstrap';

const ProductCard = ({ _id, name, price, imageUrl}) => {
 const [product] = useState(null);
  const { cartItems, setCartItems } = useCart();
  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
  };

  return ( 
  
    <Card style={{ width: '18rem' }} className="shadow-sm h-100 card-hover shadow-lg card-container">
     <Link to={`/product/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} className='products-image'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>₹{price}</Card.Text>
        
      </Card.Body></Link>
      <div className="button">
    <Link to={`/product/${_id}`} className='buynow'>
      view details
    </Link>
     <Button  onClick={handleAddToCart} className=" add-to-cart me-2">
            Add to Cart
          </Button>
  </div>
    </Card>
  );
};

export default ProductCard;



