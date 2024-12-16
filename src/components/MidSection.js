import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
const MidSection = () => {
    return (
        <div>
            <div className='mid-section'>
                <Container>
                    <Row>
                        <Col md={6} lg={3}>
                            <div className='mid-section-part box1'>
                            <div className='mid-icon'>

                            </div>
                          <h6 className='mid-header'>Bringing you solutions,par excellence & novel</h6>
                          <p className='mid-para'>We’re an Engineering firm helping solve business challenges and build feature-rich products focusing on technology, innovation, and business transformation.</p>
                            
                           </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className='mid-section-part box2'>
                            <div className='mid-icon'>

</div>
                            <h6 className='mid-header'>From an idea to a product</h6>
                          <p className='mid-para'>At Simple Stacks, we firmly believe that every idea is a great idea with the right direction, planning, and architecture. And that is exactly what we offer!</p>
                            
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className='mid-section-part box3'>
                            <div className='mid-icon'>

</div>
                            <h6 className='mid-header'>High-end performance & security</h6>
                          <p className='mid-para'>Customer satisfaction is the pivotal point that our work is built around. Working with us, you can see for yourself how we never compromise on the quality of the services we offer.</p>
                            
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className='mid-section-part box4'>
                            <div className='mid-icon'>

</div>
                            <h6 className='mid-header'>Precise Translation </h6>
                          <p className='mid-para'>Realizing your idea into a quality product as good as it was on paper. We strive to see your product through your eyes and deliver just what you envisioned. </p>
                            
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MidSection
