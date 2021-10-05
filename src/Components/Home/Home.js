import React, { useEffect, useState } from 'react';
import Features from '../Features/Features';
import FormPart from '../FormPart/FormPart';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeServiceDetail from '../HomeServiceDetail/HomeServiceDetail';
import StudentSays from '../StudentSays/StudentSays';
import WhyThisBatch from '../WhyThisBatch/WhyThisBatch';
import './Home.css';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./serviceFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const topServices = services.slice(0, 4);
    return (
        <div>

            <HomeCarousel></HomeCarousel>
            <WhyThisBatch></WhyThisBatch>

            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 className="ms-5 mt-5 mb-3">Top <span className="salmon-color">Services</span></h2>
                    {/* <div className="row row-cols-1 row-cols-md-2 g-4 px-5 mx-auto"> */}

                    <div className="d-flex flex-wrap  justify-content-center align-items-center mx-2">
                        {
                            // console.log(courses);
                            topServices.map(service =>

                                <HomeServiceDetail
                                    key={service.id}
                                    service={service}
                                >
                                </HomeServiceDetail>
                            )
                        }

                    </div>

                </div>
            </div>
            <Features></Features>
            <StudentSays></StudentSays>
            <FormPart></FormPart>



        </div>
    );
};

export default Home;