import React from 'react';
import './BottomBanner.css'; 
import image1 from '../assets/images/HugePriceDrop.jpg';
import image2 from '../assets/images/indoorplants.jpg'
import image3 from '../assets/images/BalconyBanner.jpg'
import image4 from '../assets/images/Announcement.jpg'
const BottomBanner = () => {
  

  return (
    <div className="bottom-section">
  <div className="retail-block">
    <div className="retail-text">
      <h3>Super Markets – Our Trusted Retail Partners</h3>
      <p>We don't just bring plants near you but closer to you by giving specific instructions to grow and care for your plants.

We are committed to make your experience of buying plants more professional and easier.

Presently our services are available only at Bengaluru.

You can buy our products at your nearest SuperMarkets.</p>
      
    </div>
    <div className="retail-image">
      <img src={image1} alt="Person in plant shop" />
    </div>
  </div>

  <div className="quality-block">
    <div className="quality-image">
      <img src={image2} alt="Healthy plants in greenhouse" />
    </div>
    <div className="quality-text">
      <h3>Quality Plants</h3>
      <p>Our experienced grower partners follow proven scientific methods to bring out plants with highest quality.</p>
    </div>
  </div>
   <div className="retail-block">
    <div className="retail-text">
      <h3>Quality plants</h3>
      <p>Sometimes plants die in spite of giving everything it needs. We try to avoid this kind of plant mortality by choosing growers who maintain quality from seed stage up until they are sold to you.</p>
      
    </div>
    <div className="retail-image">
      <img src={image3} alt="Person in plant shop" />
    </div>
  </div>

   <div className="quality-block">
    <div className="quality-image">
      <img src={image4} alt="Healthy plants in greenhouse" />
    </div>
    <div className="quality-text">
      <h3>Quality planters & Rich soil</h3>
      <p>We always use recyclable 100 % virgin plastic planters from great brands. We make sure planters are durable and safe for plants and environment. We prepare soil with right amounts of cocopeat, vermicompost, perlite and fertilizers suitable well for plants. Soil is prepared specifically for every particular plant. Once you buy from us, no need of adding anything to soil for next six months. </p>
    </div>
  </div>
</div>




  );
};

export default BottomBanner;
