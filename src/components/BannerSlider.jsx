import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import one from '../assets/images/1.jpg'
import two from '../assets/images/2.jpg'
import three from '../assets/images/3.jpg'

const BannerSlider = () => {
const settings = {
    dots: true,
    infinite: true,
    autoplay: true,  
  autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
return (
 <Slider {...settings} className='slider-banner'>
      <div>
        <img src={one} className="slider-image" alt="banner 1" />
      </div>
      <div>
        <img src={two} className="slider-image" alt="banner 2" />
      </div>
      <div>
        <img src={three} className="slider-image" alt="banner 2" />
      </div>
    </Slider>
  )


}
export default BannerSlider