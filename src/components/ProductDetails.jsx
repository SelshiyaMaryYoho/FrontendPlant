import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useCart } from '../contextss/Carts';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
       window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
  };

  

  if (!product) return <p>Loading...</p>;

  return (
    
    <Container className="py-5">
      <Row>
        <Col md={7}>
          <Image src={product.imageUrl} alt={product.name} fluid />
        </Col>
        <Col md={5}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>₹{product.price}</h4>
          <Button variant="success" onClick={handleAddToCart} className="me-2" style={{ marginTop: '1px' ,backgroundColor: '#af904c',border:'none' }}>
            Add to Cart
          </Button>
          <Link to='/cart' variant="success" style={{ textDecoration: 'none', color: 'black',backgroundColor: 'goldenrod' ,padding: '5px 16px',
    borderRadius: '4px',
    display: 'inline-block',
    border: '2px '}}>
            Buy Now
          </Link>
          <Link to='/plants' variant="primary" style={{ textDecoration: 'none', color: 'black',backgroundColor: 'lightblue' ,padding: '5px 16px',
    borderRadius: '4px',
    display: 'inline-block',
    border: '2px ',
    margin: '10px'}}>
          View More Products
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
