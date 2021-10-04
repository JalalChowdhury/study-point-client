import React from 'react';
import successfulImg from '../../Images/successful.png';
import './Successful.css';
const Successful = () => {
    return (
        <div className="container mx-auto">
            <h1 className="successful-header">Your Course Enroll Successfull.As soon as , We are Contact You. Thanks You for with us.</h1>
            <img src={successfulImg} className ="successful-img img-fluid h-100" alt="" />
        </div>
    );
};

export default Successful;