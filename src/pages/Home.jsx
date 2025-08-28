import React from "react";
import BannerSlider from "../components/BannerSlider";
import Services from "../components/Services";
import Category from "../components/Category";
import About from "../components/About";
import BottomBanner from "../components/BottomBanner";
import Homecontent from "../components/Homecontent";
import Customer from "../components/Customer";


const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Category />
      <Homecontent/>
      <Services />
      <BottomBanner/>
      <Customer/>
      
    </div>
  );
};

export default Home;
