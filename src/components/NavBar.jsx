import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useCart } from "../contextss/Carts.jsx";
import { FaShoppingCart } from "react-icons/fa";
import logopot from '../assets/images/plantlogo1 (1).png'
import { IoSearchSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import '../components/Navbar.css'

const NavBar = () => {

const {cartItems} = useCart()


console.log(cartItems)
  return (
    
<>
  <div className="top-banner">Free Delivery on All Orders - Minimum Order Value ₹200</div>
<Navbar expand="lg" className="plant-navbar sticky-top shadow">
  <Container fluid className="d-flex justify-content-between align-items-center flex-wrap">

   
    <Navbar.Brand as={Link} to="/">
      <img src={logopot} alt="Indo Green Logo" className="nav-logo" />
    </Navbar.Brand>

   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between flex-grow-1">

      
     

      
      <div className="category-menu">
        <Nav className="justify-content-center flex-wrap">
          <Nav.Link as={Link} to="/" className="me-4">Home</Nav.Link>
          <NavDropdown title="Plants" id="plants-dropdown" className="me-4">
            <NavDropdown.Item as={Link} to="/plants?category=Indoor">Indoor</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/plants?category=Outdoor">Outdoor</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/plants?category=Flower">Flowers</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/plants?category=Pots" className="me-4">Pots</Nav.Link>
         <Nav.Link as={Link} to="/plants?category=Accessories" className="me-4">Accessories</Nav.Link>
          <Nav.Link as={Link} to="/plants?category=Gifts" className="me-4">Gifting</Nav.Link>
          <Nav.Link as={Link} to="AboutUs" className="me-4">About Us</Nav.Link>
        </Nav>
      </div>

      
      <Nav className="icon-menu d-flex align-items-center">
        <Nav.Link as={Link} to="/login"><IoLogIn /> Login</Nav.Link>
        <Nav.Link as={Link} to="/cart">
          <FaShoppingCart />
          <span className="cart-count">{cartItems.length}</span>
        </Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>

  
</>


  );
};

export default NavBar;
