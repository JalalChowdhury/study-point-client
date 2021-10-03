import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";


const Header = () => {


    return (
        <div>

            <nav className="nav-design py-5">
                <NavLink to="/home">Home</NavLink>
                <NavLink className="mx-5" to="/about">About</NavLink>
                <NavLink className="mx-5" to="/courses">Courses</NavLink>
                <NavLink to="/events">Events</NavLink>
            </nav>
            <br />

            

           

        </div>
    );
};

export default Header;