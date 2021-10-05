import React from 'react';
import image1 from "./WhyBatchImages/courses.png";
import image2 from "./WhyBatchImages/female.png";
import image3 from "./WhyBatchImages/accessible.png";
import './WhyThisBatch.css';

const WhyThisBatch = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div>
                
                <div className="d-flex flex-wrap  justify-content-center align-items-center">
                    <div className="coaching-div d-flex justify-content-center align-items-center">
                        <img src={image1} className="coaching-img" alt="" />
                        <div>
                            <h4>10+ UX courses</h4>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="coaching-div d-flex justify-content-center align-items-center">
                        <img src={image2} className="coaching-img" alt="" />
                        <div>
                            <h4>Expert instructors</h4>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="coaching-div d-flex justify-content-center align-items-center">
                        <img src={image3} className="coaching-img" alt="" />
                        <div>
                            <h4>Life time access</h4>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyThisBatch;