import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineCalendar} from 'react-icons/ai'
const Blog = () => {
  return(
  <div>
<div className='blog-section'>
<h2>The News From Our Blog</h2>
<div className='bar blog-bar'>

</div>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua.</p>

<Container>
    <div className='blog-content'>
        <Row className='justify-content-center'>
            <Col lg={4} md={6}>
            <div className='blog-box'>
                
                <div className='blogbox-img'>
                 <img src={blog1} alt="blog"/>
                 <div className='date'> 
                  <AiOutlineCalendar/>March 15,2021
                 </div>
                </div>
                 
               <h3>The Security Risks of Changing Package Owners</h3> 
               <h6>By Admin</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
               <a>Read More <BsArrowRight className='blog-arrow'/></a>
            </div>
            </Col>

            <Col lg={4} md={6}>
            <div className='blog-box'>
                
                <div className='blogbox-img'>
                 <img src={blog2} alt="blog"/>
                 <div className='date'> 
                  <AiOutlineCalendar/>March 15,2021
                 </div>
                </div>
                 
               <h3>The Security Risks of Changing Package Owners</h3> 
               <h6>By Admin</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
               <a>Read More <BsArrowRight className='blog-arrow'/></a>
            </div>
            </Col>

            <Col lg={4} md={6}>
            <div className='blog-box'>
                
                <div className='blogbox-img'>
                 <img src={blog3} alt="blog"/>
                 <div className='date'> 
                  <AiOutlineCalendar/>March 15,2021
                 </div>
                </div>
                 
               <h3>The Security Risks of Changing Package Owners</h3> 
               <h6>By Admin</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
               <a>Read More <BsArrowRight className='blog-arrow'/></a>
            </div>
            </Col>
        </Row>
    </div>
</Container>
</div>
  </div>
  );
};

export default Blog;
