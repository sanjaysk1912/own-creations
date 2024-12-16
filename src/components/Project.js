import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import work from '../images/works-image3.jpg'
import {FiSettings} from 'react-icons/fi'
import Footer from './Footer';
const Project = () => {
    return (

        <div>
            <div className='project'>

                <h1>Project Style</h1>

                <div className='project-content-box'>
                    <Container>
                        <Row className='justify-content-center'>
                        <Col lg={4}>
                        <div className='project-info-box'>
                            <div className='project-img'>
                            <img src={work} alt="project"/>
                            <a href='#settings'><FiSettings className='settings-icon'/></a>
                            <div className='project-info'>
                            <h5>Incrediable Infrastructure</h5>
                          <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                      
                            </div>
                        </div>
                        
                        </Col>

                        <Col lg={4}>
                        <div className='project-info-box'>
                            <div className='project-img'>
                            <img src={work} alt="project"/>
                            <a href='#settings'><FiSettings className='settings-icon'/></a>
                            <div className='project-info'>
                            <h5>Incrediable Infrastructure</h5>
                          <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                      
                            </div>
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className='project-info-box'>
                            <div className='project-img'>
                            <img src={work} alt="project"/>
                            <a href='#settings'><FiSettings className='settings-icon'/></a>
                            <div className='project-info'>
                            <h5>Incrediable Infrastructure</h5>
                          <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                      
                            </div>
                        </div>
                        </Col>

                        <Col lg={4}>
                        <div className='project-info-box'>
                            <div className='project-img'>
                            <img src={work} alt="project"/>
                            <a href='#settings'><FiSettings className='settings-icon'/></a>
                            <div className='project-info'>
                            <h5>Incrediable Infrastructure</h5>
                          <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                      
                            </div>
                        </div>
                        
                        </Col>

                        <Col lg={4}>
                        <div className='project-info-box'>
                            <div className='project-img'>
                            <img src={work} alt="project"/>
                            <a href='#settings'><FiSettings className='settings-icon'/></a>
                            <div className='project-info'>
                            <h5>Incrediable Infrastructure</h5>
                          <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                      
                            </div>
                        </div>
                        </Col>

                        <Col lg={4}>
                        <div className='project-info-box'>
                            <div className='project-img'>
                            <img src={work} alt="project"/>
                            <a href='#settings'><FiSettings className='settings-icon'/></a>
                            <div className='project-info'>
                            <h5>Incrediable Infrastructure</h5>
                          <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                      
                            </div>
                        </div>
                        </Col>
                        </Row>
                    </Container>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Project;
