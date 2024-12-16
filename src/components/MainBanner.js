import React from 'react';
import {Row, Container,Col} from 'react-bootstrap'
import mainpic from '../images/main-pic.png'

import shape1 from '../images/shape1.png'
import Shape2 from '../images/shape2.svg'
import Shape3 from '../images/shape3.svg'
import Shape4 from '../images/shape4.svg'
import Shape5 from '../images/shape5.png'
const MainBanner = () => {
  return(
  <div>
   <div className='main-banner'>
     <div className='d-table'>
<div className='d-table-cell'> 
<Container>
                 <Row className="justify-content-center align-items-center">
                  
                  <Col className="col-lg-5">
                  <div className='Banner-Content'>
                  <h1>
Build your Future-Ready Products with Simple Stacks
                  </h1>

                  <p>
Your Trusted Digital Transformation Partner
                  </p>

                  <a href="#getstarted" className='getstarted btn'>Get Started</a>
                  </div>
                  </Col>


                  <Col className="col-lg-6 offset-lg-1">
                  
                  <div className='Banner-imgbox'>
<img src={mainpic} alt="Banner_main_pic"/>
                  </div>
                  </Col>

                 </Row>
             </Container>
</div>
     </div>
      <div className='Shape1'>
    <img src={shape1} alt="shape1" />
      </div>

      <div className='Shape2'>
      <img src={Shape2} alt="shape2" />
      </div>

      <div className='Shape3'>
      <img src={Shape3} alt="shape3" />
      </div>

      <div className='Shape4'>
      <img src={Shape4} alt="shape4" />
    </div>


    <div className='Shape5'>
      <img src={Shape5} alt="shape5" />
    </div>


    <div className='Shape6'>
      <img src={Shape4} alt="shape6" />
    </div>
      
    <div className='Shape7'>
      <img src={Shape4} alt="shape7" />
    </div>

    <div className='Shape8'>
      <img src={Shape2} alt="shape8" />
    </div>
      
        
            
         </div>
      </div>
  );
};

export default MainBanner;
