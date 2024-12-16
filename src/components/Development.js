import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BiData } from 'react-icons/bi'
import {TiWorld} from   'react-icons/ti'
import {VscFileSubmodule} from 'react-icons/vsc'
import {AiOutlineMail,AiOutlineCloud,AiOutlineFile,AiOutlineFall} from 'react-icons/ai'
import {MdDesktopWindows} from 'react-icons/md'
import servicemain from '../images/service-main.png'
import circle from "../images/circle.png"
const Development = () => {
    return (
        <div>
            <div className='devlopment-section'>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={6} md={12}>
                        <div className='dev-img-section'>
                            <img className="circle-img" src={circle} alt="circle"/>
                           <img className="service-img" src={servicemain} alt='main-image'/>
                         </div>
                        </Col>

                        <Col lg={6} md={12}>
                            <div className='dev-part2'>

                                <h1>What Makes Us Different</h1>

                                <div className='bar'>

                                </div>

                                <p>Our solutions are top-of-the-line on one hand and extremely cost-effective and frugal on the other.</p>

                                <div className='dev-services'>

    
<Row>
<Col lg={6} md={6}>

<p> <BiData className='cloud-icon'/> Amazing UX Competency </p>
</Col>

<Col lg={6} md={6}>
<p> <TiWorld className='cloud-icon'/> Top – Notch Coding Skills </p>
</Col>
</Row>

<Row>
<Col lg={6} md={6}>
<p> <AiOutlineFile className='cloud-icon'/> Fast Turn-Around </p>
</Col>

<Col lg={6} md={6}>
<p> <AiOutlineFall className='cloud-icon'/> Clear Communication </p>
</Col>
</Row>

<Row>
<Col lg={6} md={6}>
<p> <VscFileSubmodule className='cloud-icon'/>Great Work Ethics </p>
</Col>

<Col lg={6} md={6}>
<p> <MdDesktopWindows className='cloud-icon'/>Competitive Pricing </p>
</Col>
</Row>


<Row>
<Col lg={6} md={6}>
<p> <AiOutlineMail className='cloud-icon'/>Edge Technology </p>
</Col>

<Col lg={6} md={6}>
<p> <AiOutlineCloud className='cloud-icon'/> Cloud Based Platform</p>
</Col>
</Row>

</div>



                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Development
