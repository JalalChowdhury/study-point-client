import React, { useEffect, useState } from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeServiceDetail from '../HomeServiceDetail/HomeServiceDetail';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./serviceFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const topServices = services.slice(0,4);
    return (
        <div>
            
            <HomeCarousel></HomeCarousel>
            <div>
                <h2 className="ms-5 mt-5 mb-3">Top Services</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 px-5 mx-auto">
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
    );
};

export default Home;