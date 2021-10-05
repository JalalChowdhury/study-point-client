import React from 'react';
import './Features.css';
import img1 from "./FeatureImages/scholarship.png";
import img2 from "./FeatureImages/online-course.png";
import img3 from "./FeatureImages/global.png";

const Features = () => {
    return (
        <div className="feature-design d-flex justify-content-center align-items-center mx-5">
            <div >
                <h1 className="feature-header">Awesome <span className="salmon-color">Features</span></h1>
                <div className="d-flex flex-wrap  justify-content-center align-items-center">
                    <div className="feautre-div">
                        <img src={img1} className="feature-img" alt="" />
                        <h4>Scholarship Facility</h4>
                        <p>One make creepeth, man bearing their a firmament won't great heaven</p>
                    </div>
                    <div className="feautre-div">
                        <img src={img2} className="feature-img" alt="" />
                        <h4>Learning Online & Offline</h4>
                        <p>One make creepeth, man bearing their a firmament won't great heaven</p>
                    </div>
                    <div className="feautre-div">
                        <img src={img3} className="feature-img" alt="" />
                        <h4>Global Certification</h4>
                        <p>One make creepeth, man bearing their a firmament won't great heaven</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;