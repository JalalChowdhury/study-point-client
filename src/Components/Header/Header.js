import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";


const Header = () => {


    return (
        <div>

            <nav className="nav-design py-5">
                <NavLink to="/home">Home</NavLink>
                <NavLink className="mx-5" to="/services">Coaching-Services</NavLink>
                <NavLink className="mx-5" to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
            <br />

            {/* <Navbar bg='info' style={{ fontWeight: 'bolder' }} className='navbar-container' expand="lg">
                <Navbar.Brand className='ml-5'>Event Fairy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <li>
                            <Link className='single-link' to='/home'>Home</Link>
                        </li>

                        <li>
                            <Link className='single-link' to='/dashboard'>Dashboard</Link>
                        </li>

                       
                    </Nav>

                </Navbar.Collapse>
            </Navbar> */}




        </div>

    );
};

export default Header;