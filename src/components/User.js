import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
const user = () => {
  return (
  <div>
      <div className='user-section'>

<h2>We Always Try To Understand Users Expectation</h2>

<div className='bar user-bar'>

</div>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
<Container>
  <div className='user-feedback'>
 
<Row>

<Col className='col-lg-3 col-md-3 col-6'>
    <div className='user-box'>
       <span className='user-number'>
           180K
       </span>
       <span className='user-txt'>Downloaded</span>

    </div>
    </Col>

    <Col className='col-lg-3 col-md-3 col-6'>
    <div className='user-box'>
       <span className='user-number'>
         20k
       </span>
       <span className='user-txt'>Feedback</span>

    </div>
    </Col>

    <Col className='col-lg-3 col-md-3 col-6'>
    <div className='user-box'>
       <span className='user-number'>
         500+
       </span>
       <span className='user-txt'>Workers</span>

    </div>
    </Col>


    <Col className='col-lg-3 col-md-3 col-6'>
    <div className='user-box'>
       <span className='user-number'>
           70+
       </span>
       <span className='user-txt'>Contributors</span>

    </div>
    </Col>
</Row>


   

  </div>
  </Container>

  <Container>
  <div className='user-contact'>
     
          <Row>
              <Col lg={6} md={6} sm={12}>
<h3>Have any question about us?</h3>
<p>Don't hesitate to contact us</p>
</Col>
<Col lg={6} md={6} sm={12}>
<a className='contact-btn'>Contact Us</a>
</Col>
</Row>

  </div>
  </Container>
  </div>

  </div>
  );
};

export default user;
