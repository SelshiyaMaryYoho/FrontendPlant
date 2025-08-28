import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { Form, Button } from 'react-bootstrap';
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../components/footer.css'

import { Link } from 'react-router-dom';


const FooterCard = () => {
  return (
   <footer className="footer-section">
  <Container fluid className='shadow-lg'>
    <Row className="text-start py-5 text-white ">
      <Col md={2}>
        <h5>Gardening Knowledge</h5>
        <ul className="footer-links">
          <li><a href="#">How to Plant</a></li>
          <li><a href="#">Indoor Gardening</a></li>
          <li><a href="#">Composting</a></li>
          <li><a href="#">Soil Basics</a></li>
        </ul>
      </Col>

      <Col md={2}>
        <h5>Useful Links</h5>
        <ul className="footer-links">
          <li><a href="#">Track Order</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Offers</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Affiliate</a></li>
        </ul>
      </Col>

      <Col md={2}>
        <h5>About</h5>
        <ul className="footer-links">
                  <Link to="/Aboutus" variant="light">
   AboutUs
</Link>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </Col>

      <Col md={3}>
        <h5>Follow Us</h5>
        <div className="footer-social">
           <FaFacebook className='i'/>
         <FaPinterest className='i'/>
        <FaInstagramSquare className='i'/>
          <FaYoutube className='i'/>
        <FaLinkedin className='i'/>
        </div>
      </Col>

      <Col md={3}>
        <h5>Subscribe</h5>
        <p className="small">Get tips, offers & updates</p>
        <Form className="d-flex">
          
         <Link to="/signup">
  <Button variant="light">Sign Up</Button>
</Link>
        </Form>
      </Col>
    </Row>
  </Container>
</footer>

  );
};

export default FooterCard;
