import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import logo from '../images/logo.png'
import { MdOutlineShoppingCart} from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa';

import Home from './Home';
import Contact from './Contact'
import ServiceStyle1 from './ServiceStyle1'
import ServiceStyle2 from './ServiceStyle2'
import Project from './Project';
const MainNav = () => {
    return (
        <div>
          <Router>
            <Navbar collapseOnSelect expand="md" className='main-nav'>
  <Container>
     
  <Navbar.Brand href="#home" className="navbar-logo">
      <img src={logo} alt='logo' />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='navbar-nav-nav ms-auto'>
      <Nav.Link className="nav-a" as={Link} to="/home">Home<FaAngleDown/>
      <ul className='dropdown-content'>
      <Nav.Link href="./">IT Startup</Nav.Link>
      <Nav.Link href="#deets">IT Startuptwo</Nav.Link>
      <Nav.Link href="#deets">IOT</Nav.Link>
      <Nav.Link href="#deets">Hosting</Nav.Link>
      <Nav.Link href="#deets">Machine Learning</Nav.Link>
      <Nav.Link href="#deets">Machine Learning2</Nav.Link>
      <Nav.Link href="#deets">Bigdata Analysis</Nav.Link>
      <Nav.Link href="#deets">Digital Agency</Nav.Link>
      <Nav.Link href="#deets">Digital Agency Portfolio</Nav.Link>
      <Nav.Link href="#deets">Pc Repair</Nav.Link>
      </ul>
      </Nav.Link>
      <Nav.Link className="nav-a" href="#deets">About <FaAngleDown/>
      <div className='dropdown-content'>
      <Nav.Link href="/Blog.js">About Style1</Nav.Link>
      <Nav.Link href="#deets">About Style2</Nav.Link>
      <Nav.Link href="#deets">About Style3</Nav.Link>
      </div>
      </Nav.Link> 
      <Nav.Link className="nav-a" href="#deets">Pages<FaAngleDown/>
      <div className='dropdown-content'>
      <Nav.Link className="dropdown-a" href="./">Features<FaAngleDown className='dropdown-arrow'/>
      <div className='dropdown-right'>
        <a href='#dd'>Features</a>
        <a href='#dd'>Features Details</a>
      </div>
      </Nav.Link>
      <Nav.Link className="dropdown-a" href="#deets">Services<FaAngleDown className='dropdown-arrow'/>
      <div className='dropdown-right'>
        <li><Link to="/servicestyle1">Service Style 1</Link></li>
        <li><Link to="/servicestyle2">Service Style 2</Link></li>
        <li><Link to="/servicestyle3">Service Style 3</Link></li>
        <li><Link to="/servicestyle4">Service Style 4</Link></li>
        <li><Link to="/servicestyle5">Service Style 5</Link></li>
        <li><Link to="/servicestyle6">Service Style 6</Link></li>
        
      </div>
      </Nav.Link>
      <Nav.Link href="#deets">Feedback</Nav.Link>
      <Nav.Link className="dropdown-a" href="#deets">Projects<FaAngleDown className='dropdown-arrow'/>
      <div className='dropdown-right'>
      <li><Link to="/project">Project Style 1</Link></li>
      <li><Link to="/project">Project Style 2</Link></li>
      <li><Link to="/project">Project Style 3</Link></li>
      </div>
      </Nav.Link>
      <Nav.Link href="#deets">Team</Nav.Link>
      <Nav.Link href="#deets">Pricing</Nav.Link>
      <Nav.Link className="dropdown-a" href="#deets">User <FaAngleDown className='dropdown-arrow'/> 
      <div className='dropdown-right'>
        <a href='#dd'>Login</a>
        <a href='#dd'>Signup</a>
        <a href='#dd'>Forget Password</a>
      </div>
      
      </Nav.Link>
      <Nav.Link href="#deets">FAQ's</Nav.Link>
      <Nav.Link href="#deets">Coming Soon</Nav.Link>
      <Nav.Link href="#deets">404 Error Page</Nav.Link>
      </div>
      </Nav.Link>
      <Nav.Link className="nav-a" href="#deets">Shop <FaAngleDown/>
      <div className='dropdown-content'>
      <Nav.Link href="./">Shop</Nav.Link>
      <Nav.Link href="#deets">Checkout</Nav.Link>
      </div>
      </Nav.Link>
      <Nav.Link className="nav-a" href="#deets">Blog <FaAngleDown/>
      <div className='dropdown-content'>
      <Nav.Link href="./">Blog</Nav.Link>
      <Nav.Link href="#deets">Blog Grid 2</Nav.Link>
      <Nav.Link href="#deets">Blog Right Sidebar 2</Nav.Link>
      <Nav.Link href="#deets">Blog Grid 3</Nav.Link>
      <Nav.Link href="#deets">Blog Right Sideba3</Nav.Link>
      <Nav.Link href="#deets">Blog Details</Nav.Link>
      </div>
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>

    
  </Navbar.Collapse>
  <div className='navbar-option'>
      <Nav.Link className="shop-a"href="#deets"><MdOutlineShoppingCart className='shop-icon'/>
      <span className="shop-cart">0</span>
      </Nav.Link>
      <Nav.Link className="support-btn" href="#deets">Support</Nav.Link>
      <Nav.Link className="login-btn" href="#deets">Login</Nav.Link>
    </div>
  </Container>
  
</Navbar>

<Routes>
<Route exact path="/home" element={<Home />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/servicestyle1" element={<ServiceStyle1/>} />
<Route exact path="/servicestyle2" element={<ServiceStyle2/>} />
<Route exact path="/project" element={<Project/>} />
</Routes>


</Router>

 
        </div>
    )
}

export default MainNav
