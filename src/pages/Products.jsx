import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

import '../pages/Products.css';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';



const Products = () => {
   
  
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [query, setQuery] = useState('');
const navigate = useNavigate();
const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search") || '';
  const category = queryParams.get("category") || '';

useEffect(() => {
  axios.get("http://localhost:4000/api/products")
    .then(res => setProducts(res.data))
    .catch(err => console.error("Error fetching products:", err));
     window.scrollTo(0, 0);
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  if (query.trim() !== '') {
    navigate(`/plants?search=${query}`);
  }
};

const filtered = products.filter((p) => {
  
  if (category  &&  p.category?.toLowerCase() !== category.toLowerCase()) {
            return false;
  }
 
       if (search  &&   !((p.name || " ").toLowerCase().includes(search.toLowerCase()) ||
                     (p.category || "").toLowerCase().includes(search.toLowerCase()))) {
  return false;
}
  
  return true;
});


  return (
    <>
<div>
     <Form className="d-flex justify-content-end search-wrapper" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='search-bar'
              />
            <Button type="submit" className="ms-2 Search-button" style={{ backgroundColor: "#33691e", borderColor: "#33691e" }}>
              <FaSearch className="search-icon" style={{ color: "white" }} />
            </Button>
          </Form></div>
    <div className="product-container">
    {category && <h4 className="category-heading">Category : {category}</h4>}

  <div className="card-grid">
    {filtered.length === 0 ? (
      <p>No matching products found.</p>
    ) : (
      filtered.map(product => (
        <div key={product._id} className="product-column card-fade">
          <ProductCard {...product} />
        </div>
      ))
    )}
  </div>
</div>
</>
  );
};

export default Products;
