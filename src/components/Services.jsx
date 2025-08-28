import React from 'react'

import serviceplant from '../assets/images/serviceplant.png';
import replacement from '../assets/images/replacement.png';
import delivery from '../assets/images/delivery.png'
import '../components/Services.css'

const Services = () => {
  return (
    
<div className="promo-section">
  <div className="promo-banner">
    <div className="promo-item">
      <img src={serviceplant} alt="Unbeatable Quality" />
      <div>
        <h5>Unbeatable Quality</h5>
        <p>We sell quality garden products at the very best prices.</p>
      </div>
    </div>
    <div className="promo-item">
      <img src={delivery} alt="10 million+ plants delivered" />
      <div>
        <h5>10 million+ plants delivered</h5>
        <p>Greenery at your doorstep, everywhere in India.</p>
      </div>
    </div>
    <div className="promo-item">
      <img src={replacement} alt="Free Replacements" />
      <div>
        <h5>Free Replacements</h5>
        <p>In case of damage, we will provide a free replacement.</p>
      </div>
    </div>
  </div>
<div className=''>
  <div className="service-text">
    
    <h4>The Green Yard | Best Plant Nursery | Online Garden Store | Plants Home Delivery</h4>
    <p>
      The Green Yard, “the complete garden solutions,” is the best online garden store and plant nursery in Bangalore. In a short span of time, it has become one of the top addresses for home & garden décor. Buy quality garden products online at reasonable prices. 
      Our offline store is located at HSR Sector 2 (HSR Club Road), Bengaluru. We offer premium indoor and outdoor plants, planters in ceramic, fiber plastic, terracotta, and wood, miniatures, gift sets, and all gardening accessories you need—everything in one step.
    </p>
  </div>
</div>
</div>


  
       
  )
}

export default Services