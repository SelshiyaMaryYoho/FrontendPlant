import React from 'react'
import plant1 from '../assets/images/plant1.jpg';
import plant2 from '../assets/images/plant2.jpg';
import plant3 from '../assets/images/Tree1.jpg';
import pot1 from '../assets/images/pot1.jpg';
import gift1 from '../assets/images/gift1.jpg';
import Acc1 from '../assets/images/Acc1.jpg';
import Flower from '../assets/images/flower1.jpg';
import Air from '../assets/images/Air1.jpg';
import '../components/Category.css'

import { Link } from 'react-router-dom';
import  '../components/ProductCard.css'

const products = [
  {
   
    name: 'Indoor plant',
    category: 'Indoor',
    image: plant1
  },
  {
   
    name: 'Outdoor plant',
     category: 'Outdoor',
    image: plant2
  },
  {
    
    name: 'Trees',
    category: 'Trees',
    image:plant3
  },
  {
    
    name: 'Pots',
    category: 'Pots',
    image: pot1
  },
  {
    
    name: 'Gifts',
    category: 'Gifts',
    image: gift1
  },
  {
    
    name: 'Accessories',
    category: 'Accessories',
    image: Acc1
  },
  {
    
    name: 'Flowers',
    category: 'Flower',
    image: Flower
  },
  ]

const Category = () => {
  return (
  <>
  <h3>Shop By Category</h3>
    <div className="category-container ">
      
     {products.map((product, index) => (
  <div key={index} className="card-container">
  
  <Link to={`/plants?category=${product.category}`}>
  <img src={product.image} alt="" className="products-image" />
  </Link> 

    <div className="product-overlay">
      <p className="product-title">{product.name}</p>
  
   <Link to={`/plants?category=${product.category}`} style={{ textDecoration: 'none', color:'darkgreen' }}>
   <p className="bold-text">View All</p>
   </Link> 
    
    </div>
  </div>
))}

       

     
    
  
  </div></>
)}

export default Category