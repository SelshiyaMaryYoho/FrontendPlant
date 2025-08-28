import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/home.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Buynow from "./linkpages/buynow.jsx";
import About from "./components/About.jsx";
import Thanks from "./linkpages/Thanks.jsx";
import Payonline from "./linkpages/payonline.jsx";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/buynow" element={<Buynow/>} />
        <Route path="/AboutUs" element={<About/>} />
        <Route path="/payonline" element={<Payonline/>} />
         <Route path="/thanks" element={<Thanks/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
