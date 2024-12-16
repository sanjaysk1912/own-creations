import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import blog2 from '../images/blog2.jpg'
import {BsPlusCircle} from 'react-icons/bs'
import Footer from './Footer';
const ServiceStyle2 = () => {
  return(
  <div>
<div className='servicestyle2'>
<h1>Service Style Two</h1>

<div className='servicestyle2-box'>
<Container>
    <Row>
        <Col>
        <div className='serviceinfo2'>
<img src={blog2} alt="n"/>

<div className='content'>
<h3>IT Professionals</h3>
<a className="readmore" href='#gg'>Read More <BsPlusCircle/></a>
</div>
        </div>
        </Col>

        <Col>
        <div className='serviceinfo2'>
<img src={blog2} alt="n"/>

<div className='content'>
<h3>IT Professionals</h3>
<a className="readmore" href='#gg'>Read More <BsPlusCircle/></a>
</div>
        </div>
        </Col>

        <Col>
        <div className='serviceinfo2'>
<img src={blog2} alt="n"/>

<div className='content'>
<h3>IT Professionals</h3>
<a className="readmore" href='#gg'>Read More <BsPlusCircle/></a>
</div>
        </div>
        </Col>
    </Row>
    <Container style={{margin:"45px 0px 0px 0px"}}>
    <Row>
        <Col>
        <div className='serviceinfo2'>
<img src={blog2} alt="n"/>

<div className='content'>
<h3>IT Professionals</h3>
<a className="readmore" href='#gg'>Read More <BsPlusCircle/></a>
</div>
        </div>
        </Col>

        <Col>
        <div className='serviceinfo2'>
<img src={blog2} alt="n"/>

<div className='content'>
<h3>IT Professionals</h3>
<a className="readmore" href='#gg'>Read More <BsPlusCircle/></a>
</div>
        </div>
        </Col>

        <Col>
        <div className='serviceinfo2'>
<img src={blog2} alt="n"/>

<div className='content'>
<h3>IT Professionals</h3>
<a className="readmore" href='#gg'>Read More <BsPlusCircle/></a>
</div>
        </div>
        </Col>
    </Row>

</Container>
</Container>


</div>

</div>
<Footer />
  </div>
  );
};

export default ServiceStyle2;
