import React from 'react';
import {Container, Row,Col,Form} from 'react-bootstrap'
import contactimg from "../images/contact-img.png"
const Getintouch = () => {
  return(
  <div>
<div className='get-in-touch'>
<h1>
Get In Touch With Us
</h1>

<div className='bar get-bar'>

</div>

<p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
</div>

<div className='getintouch-box'>
<Container>
<Row className='align-items-center'> 
    <Col lg={6}>
   <div className='getintouch-imgbox'>
<img src={contactimg} alt='img' />
   </div>
    </Col>

    <Col lg={6}>
<div className='getintouch-formbox'>
<Form>
    <Row>
<Col md={12} lg={12}>
<input type="text" placeholder='Your Name'/>
</Col>

<Col md={12} lg={12}>
<input type="text" placeholder='Your Email Address'/>
</Col>

<Col lg={6} md={6}>
<input type="text" placeholder='Phone Number'/> 
</Col>

<Col lg={6} md={6}>
<input type="text" placeholder='Your Subject' className=''/>
</Col>


<Col lg={12} md={12}>
<textarea name="text" cols="30" rows="5" placeholder="Write your message..." className='text-area form-control'></textarea>

</Col>

<Col lg={12} md={12}>
<button className='send'>Send Message</button>
</Col>
</Row>

</Form>
</div>

    </Col>
</Row>
</Container>
</div>

  </div>
  );
};

export default Getintouch;
