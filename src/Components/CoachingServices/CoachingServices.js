import React, { useEffect, useState } from 'react';
import Features from '../Features/Features';
import Service from '../Service/Service';
import './CoachingService.css';

const CoachingServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./serviceFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <h1 className="services-header">Coaching <span className="salmon-color">Services</span></h1>
            <div>
                <div className="row row-cols-1 row-cols-md-3 px-3 g-4 container mx-auto">
                    {
                        // console.log(courses);
                        services.map(service =>

                            <Service
                                 key={service.id}
                                service={service}
                            >
                            </Service>
                        )
                    }

                </div>
            </div>
            <Features></Features>

        </div>
    );
};

export default CoachingServices;