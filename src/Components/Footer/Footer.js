import { faFacebook,  faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee, faEnvelope, faMapMarked, faMapMarkedAlt, faMapMarkerAlt, faMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section className="footer-container mt-5">
                <div className="subscribe d-flex justify-content-center">
                    <div>
                        <h2 className="mt-4 mr-5 text-center">Subscribe to Our Newsletter</h2>
                        <p className="text-center mr-2"><small>No spam message from us, only give you latest offer which is best for you and your business</small></p>
                        <div class="input-group mb-3">
                            <div className="input-group-prepend">
                                <span class="input-group-text p-3" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control me-1" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                            <button className="add-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 mb-4 d-flex justify-content-around">
                    <div className="col-md-2 ml-1">
                        <h3 className=""> Contact US</h3>
                        <p> <small>  134/4 NY, Sylhet, Bangladesh </small> </p>
                        <p> <small>  info@study-point.com </small> </p>
                        <p> <small>  (+88) 01646- 705394 </small> </p>

                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">Our Services</h3>
                        <p> <small>Bascis Course</small> </p>
                        <p> <small>Mastering Packages course</small> </p>
                        <p> <small>Web & graphics Design</small> </p>
                        <p> <small>Others</small> </p>


                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">Recent Events</h3>
                        <p><small>Web Design Bootcamp</small></p>
                        <p><small>Free 15 Days Spoken Camp</small></p>
                        <p><small>Festival to all STUDY POINT of students</small></p>

                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">FAQ</h3>
                        <p> <small>How Can We Help Learning terms?</small> </p>
                        <p> <small>What Course Do You Learn?</small> </p>
                        <p> <small>Course category</small> </p>
                        <p> <small>Learning & Grow Skill</small> </p>
                        
                    </div>

                </div>
                <div className="social-links text-center">
                    <a target="_blank" rel="noopener noreferrer" href="//www.facebook.com" > <FontAwesomeIcon className='text-white social-icon' icon={faFacebook} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.twitter.com" > <FontAwesomeIcon className='text-white social-icon' icon={faTwitter} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.instragram.com" > <FontAwesomeIcon className='text-white social-icon' icon={faInstagram} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.youtube.com" > <FontAwesomeIcon className='text-white social-icon' icon={faYoutube} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.linkedin.com" > <FontAwesomeIcon className='text-white social-icon' icon={faLinkedin} /></a>
                </div>
                <p className="text-center text-white mt-2 ">Copyright ©  STUDY POINT. All rights reserved. </p>
            </section>
        </div>
    );
};

export default Footer;