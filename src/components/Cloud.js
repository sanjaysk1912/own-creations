import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { BiData } from 'react-icons/bi'
import {TiWorld} from   'react-icons/ti'
import {VscFileSubmodule} from 'react-icons/vsc'
import {AiOutlineMail,AiOutlineCloud,AiOutlineFile,AiOutlineFall} from 'react-icons/ai'
import {MdDesktopWindows} from 'react-icons/md'
import cloud from '../images/cloud.png'
import circle from "../images/circle.png"

const Cloud = () => {
    return (
        <div>
            <div className='cloud-section'>
            <Container>
                <Row className='justify-content-center align-items-center'> 
<Col lg={6} md={12}>

<div className='cloud-part1'>

<h1>Solutions We Deliver</h1>

<div className='bar'>

</div>

<p>We IT-enable all kinds of B2B, B2C interactions and internal operations.</p>


<div className='cloud-services'>

    
        <Row>
       <Col md={6} lg={6}>
       <div className='cloud-p'>
       <p> <BiData className='cloud-icon'/> Enterprise Software Development</p>
       </div>
       </Col>

       <Col md={6} lg={6}>
       <p> <TiWorld className='cloud-icon'/> Dedicated Development Team </p>
       </Col>
        </Row>
    
        <Row>
       <Col md={6} lg={6}>
       <p> <AiOutlineFile className='cloud-icon'/> UI / UX Design  </p>
       </Col>

       <Col md={6} lg={6}>
       <p> <AiOutlineFall className='cloud-icon'/> QA & Testing </p>
       </Col>
        </Row>

        <Row>
       <Col md={6} lg={6}>
       <p> <VscFileSubmodule className='cloud-icon'/> Product Development </p>
       </Col>

       <Col md={6} lg={6}>
       <p> <MdDesktopWindows className='cloud-icon'/>Application Maintenance Service </p>
       </Col>
        </Row>


        <Row>
       <Col md={6} lg={6}>
       <p> <AiOutlineMail className='cloud-icon'/>Business Process Management </p>
       </Col>

       <Col md={6} lg={6}>
       <p> <AiOutlineCloud className='cloud-icon'/> DevOps Consulting </p>
       </Col>
        </Row>
 
</div>

</div>



</Col>


<Col lg={6} md={12}>

<div className='cloud-img-section'>
    <img className="circle-img" src={circle} alt="circle"/>
    <img className="cloud-img" src={cloud} alt='cloud'/>
</div>

</Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default Cloud
