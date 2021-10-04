import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const CoachingServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./serviceFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <h1>Coaching services</h1>
            <div>
                <div className="row row-cols-1 row-cols-md-3 px-3 g-4">
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

        </div>
    );
};

export default CoachingServices;