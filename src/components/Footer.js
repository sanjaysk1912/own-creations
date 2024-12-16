import React from 'react';
import logo from '../images/logo.png'
import {Container,Col,Row} from 'react-bootstrap'
import {FiFacebook,FiTwitter,FiInstagram,FiLinkedin} from'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiMail,FiPhoneCall} from 'react-icons/fi'
const Footer = () => { 
  return (
  <div>
    <div className='footer-section'>
  
  <Container>
      <Row>
          <Col lg={3} md={6}>
              <div className='logo-box'>
<img src={logo} alt="logo"/>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              </div>
          </Col>

          <Col  lg={3} md={6}>
              <div className='company-box'>

                  <h6>Company</h6>

                  <ul>
                      <li>About Us</li>
                      <li>Services</li>
                      <li>Features</li>
                      <li>Our Pricing</li>
                      <li>Latest News</li>
                  </ul>

              </div>
              </Col>

              <Col  lg={3} md={6}>
              
              <div className='support-box'>

                  <h6>Support</h6>

                  <ul>
                      <li>About Us</li>
                      <li>Services</li>
                      <li>Features</li>
                      <li>Our Pricing</li>
                      <li>Latest News</li>
                  </ul>

              </div>
              </Col>

              <Col  lg={3} md={6}>
              
              <div className='address-box'>

<h6>Address</h6>

<ul>
    <li> <HiOutlineLocationMarker/> 27 Division St, New York,
           NY 10002, USA</li>
    <li> <FiMail/> Email: <a href="mailto:startp@gmail.com">startp@gmail.com</a></li>
    <li> <FiPhoneCall/> Phone: <a href='tel:+ (321) 984 754'>+ (321) 984 754</a></li>
</ul>

<ul className='social-links'>
    <li><a className='facebook'><FiFacebook className='footer-fb'/></a></li>
    <li><a className='twitter'><FiTwitter className='footer-tr'/></a></li>
    <li><a className='instagram'><FiInstagram className='footer-ig'/></a></li>
    <li><a className='linkedin'><FiLinkedin className='footer-ln'/></a></li>
</ul>



</div>


              </Col>
      </Row>
  </Container>

<Container>
    <Row>
        <Col>
        <div className='copy-area'>
            <p>Copyright © 2022 StartP. All rights reserved by EnvyTheme</p>
        </div>
        </Col>
    </Row>
</Container>


    </div>
  </div>
  );
};

export default Footer;
