import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import {HiOutlineMail} from 'react-icons/hi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'
import Map from './Map';
import Getintouch from './Getintouch';
import Footer from './Footer'

const Contact = () => {
  return (
  <div>
<div className='contact'>
<h1>Contact Us</h1>

<Container>
<Row>
<Col>
<div className="contact-box">

<div className='icon'>
<HiOutlineMail className='icon-icon'/>
</div>
<h3>Mail Here</h3>

<p><a href='mailto:admin@startp.com'>admin@startp.com</a></p>
<p><a href='mailto:info@startp.com'>info@startp.com</a></p>

</div>

</Col>

<Col>
<div className="contact-box">

<div className='icon'>
<HiOutlineLocationMarker className='icon-icon'/>
</div>
<h3>Call Here</h3>

<p>27 Division St, New York, NY 10002, United States of America</p>
</div>

</Col>



<Col>
<div className="contact-box">

<div className='icon'>
<FiPhone className='icon-icon'/>
</div>
<h3>Call Here</h3>

<p><a href="tel:+1234567890">+123 456 7890</a></p>
<p><a href="tel:+1234567890">+123 456 7890</a></p>

</div>

</Col>
</Row>

</Container>

</div>

<Map />

<Getintouch />

<Footer />
  </div>
  );
};

export default Contact;
