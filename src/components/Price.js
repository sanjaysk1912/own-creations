import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Price = () => {
  return (
  <div>
    <div className='price-section'>
        <h3>Pricing Plans</h3>

        <div className='bar price-bar'>

    </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> 
        tempor incididunt ut labore et dolore magna aliqua.</p>

<div className='pricing-content'>
<Container>
    <Row className='justify-content-center'>
        <Col lg={4} md={6}>
        <div className='price-box'>
        <h3>Basic Plan</h3>
<span><sup>$</sup>15.00 /Mon</span>
<ul>
    <li>5 GB Bandwidth</li>
    <li>Highest Speed</li>
    <li>1GB Stroage</li>
    <li>Unlimited Website</li>
    <li>Unlimited Users</li>
    <li className='price-li'><del>24x7 Great Support</del></li>
    <li className='price-li'><del>Monthly Reports and Analytics</del></li>
</ul>

<a>Select Plan</a>
        </div>
        
        </Col>

        <Col lg={4} md={6}>
        <div className='price-box'>
        <h3 className='advanced-header'>Basic Plan</h3>
<span><sup>$</sup>15.00 /Mon</span>
<ul>
    <li>5 GB Bandwidth</li>
    <li>Highest Speed</li>
    <li>1GB Stroage</li>
    <li>Unlimited Website</li>
    <li>Unlimited Users</li>
    <li>24x7 Great Support</li>
    <li className='price-li'><del>Monthly Reports and Analytics</del></li>
</ul>

<a className='advanced'>Select Plan</a>
        </div>
        
        </Col>



        <Col lg={4} md={6}>
        <div className='price-box'>
        <h3>Basic Plan</h3>
<span><sup>$</sup>15.00 /Mon</span>
<ul>
    <li>5 GB Bandwidth</li>
    <li>Highest Speed</li>
    <li>1GB Stroage</li>
    <li>Unlimited Website</li>
    <li>Unlimited Users</li>
    <li>24x7 Great Support</li>
    <li>Monthly Reports and Analytics</li>
</ul>
<a>Select Plan</a>
        </div>
        
        </Col>
    </Row>
</Container>
</div>
    </div>
  </div>
  )
  ;
};

export default Price;
