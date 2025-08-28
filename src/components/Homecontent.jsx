import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Homecontent.css';

import plant1 from '../assets/images/plant1.jpg';
import plant2 from '../assets/images/plant2.jpg';
import plant3 from '../assets/images/Tree1.jpg';
import pot1 from '../assets/images/pot1.jpg';
import gift1 from '../assets/images/gift1.jpg';
import flower1 from '../assets/images/flower1.jpg';
import Air from '../assets/images/Air1.jpg';

const categories = [
  { name: "Terracotta Pots", image: plant1 },
  { name: "99 Rupee Store", image: plant2 },
  { name: "Garden Miniature", image: plant3 },
  { name: "Plants", image: pot1 },
  { name: "Gifts", image: gift1 },
  { name: "Terracotta Pots", image: plant1 },
  { name: "99 Rupee Store", image: plant2 },
  { name: "Garden Miniature", image: Air },
  { name: "Plants", image: pot1 },
  { name: "Gifts", image: flower1 },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Homecontent = () => {
  return (
    <div className="product-section">
      <h3>Buy Best Selling Plants</h3>
      <Slider {...sliderSettings} className="slider-container">
        {categories.map((cat, index) => (
          <div key={index} className="custom-card-wrapper">
            <div className="custom-card">
              <img src={cat.image} alt={cat.name} />
              <h4>{cat.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Homecontent;
