import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import "./Header.css";


const Header = () => {


    return (
      
            
            <Navbar bg='info' style={{ fontWeight: 'bolder' }} className='navbar-container px-4' expand="lg">
                <Navbar.Brand className='ml-5'>STUDY <span className='salmon-color'>POINT</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <li>
                            <Link className='single-link' to='/home'>Home</Link>
                        </li>

                        <li>
                            <Link className='single-link' to='/services'>Coaching Services</Link>
                        </li>
                        <li>
                            <Link className='single-link' to='/about'>About</Link>
                        </li>
                        <li>
                            <Link className='single-link' to='/contact'>Contact Us</Link>
                        </li>


                        <img src="https://i.ibb.co/5cvYw8D/blank-user.jpg" style={{ display:  'block' , width: '40px' ,marginLeft:'50px'}} className='ml-5 rounded-circle' alt="" />

                    </Nav>

                </Navbar.Collapse>
            </Navbar>



        

    );
};

export default Header;