import React from 'react'
import { Row,Col,Container,Form } from 'react-bootstrap'
import shape1 from '../images/shape1.png'
import shape5 from '../images/shape5.png'
import shape4 from '../images/shape4.svg'
import shape2 from '../images/shape2.svg'
const Banner = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={5}>
                    <div className='banner-content'>

                    <div className='shape4'>
<img src={shape4} alt="shape4" />
                        </div>
                        <div className='shape1'>
<img className="rotate-3d" src={shape1} alt="shape1" />
                        </div>

                       <div>
<h1>Built for Developers</h1>
<p className='banner-para'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Quis ipsum suspendisse ultrices gravida.
</p>

<a className="btn btn-primary getstarted" href='#get strated'>Get Started</a>
</div>
                    </div>

                    </Col>

                    <Col lg={5} className='offset-lg-1'>
<div className='form-box'>
    <div className='shape2'>
<img src={shape2} alt="shape2" />
    </div>

    <div className='shape5'>
<img src={shape5} alt="shape5" />
    </div>

    <div className='form-container'>
    <Form>
        <div className='form-grp'>
        <label>Username</label> 
        <br/>
        <input type="text" placeholder='Enter username'/>
        </div>

        <div className='form-grp'>
        <label>Email</label> 
        <br/>
        <input type="text" placeholder='Enter password'/>
        </div>

        <div className='form-grp'>
        <label>Password</label> 
        <br/>
        <input type="text" placeholder='Create a password'/>
        </div>
        <button className='registerbtn'>Register Now</button>
   </Form>
    </div>
    
</div>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Banner
