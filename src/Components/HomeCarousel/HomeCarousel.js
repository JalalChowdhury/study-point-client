import React from 'react';
import carouselImg1 from "../../Images/coachingHome1.jpg";
import carouselImg2 from "../../Images/coaching2.png";
import carouselImg3 from "../../Images/coachingHome3.jpg";
import './HomeCarousel.css';
const HomeCarousel = () => {
    return (
        <div className="carousel-design mb-4">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <div className="row carousel1-design d-flex justify-content-center align-items-center py-5">
                            <div className="col-md-6 py-3">
                                <p className="text-danger">Are you ready to learn?</p>
                                <h1>Learn With fun on any Schedule</h1>
                                <p>Education is essential because it allows the overall holistic and wholesome development of individuals and makes them self-sufficient and skilful.</p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-center align-items-center">
                                <img src={carouselImg2} className="img-fluid carousel-image" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="row carousel2-design d-flex justify-content-center align-items-center py-5">
                            <div className="col-md-6">
                                <h1>“Making the right to an inclusive, equitable, quality, free public education a reality”</h1>
                                <p>A good education is constructive in helping to develop the future of a person. Learning encourages confidence by providing knowledge of various different spheres of life. </p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-center align-items-center">
                                <img src={carouselImg1} className="img-fluid carousel-image" alt="..." />
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item ">
                        <div className="row carousel3-design d-flex justify-content-center align-items-center py-5">
                            <div className="col-md-6">
                                <h1>Acquire the most important skills of the present time by enrolling, training  track programs of your choice.</h1>
                                <p>We too should get proper education by understanding its real value and get benefitted completely. Our aim of getting education should be to help 
                                    other needy people of the society to get them over the weaknesses and superstitions</p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-center align-items-center">
                                <img src={carouselImg3} className="img-fluid carousel-image" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HomeCarousel;