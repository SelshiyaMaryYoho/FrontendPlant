import React from 'react'
import plantTopLeft from '../assets/images/plant-svg-top-left.svg';
import plantTopRight from '../assets/images/plant-svg-bottom-right.svg'
import '../components/Customer.css'
const Customer = () => {

  return (
    <div className='customer-container'>
    <div className='image-wrapper'>
<img src={plantTopRight} alt="Top Left Plant" className="corner-image right" />
<div className='customer-text'>
    <p>20,000+ </p>
<p>Plants and trees delivered</p>
</div>
  <img src={plantTopLeft} alt="Top Right Plant" className="corner-image left" />
  
</div>

    </div>
  )
}

export default Customer