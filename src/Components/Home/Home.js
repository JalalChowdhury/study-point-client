import React, { useEffect, useState } from 'react';
import HomeServiceDetail from '../HomeServiceDetail/HomeServiceDetail';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./serviceFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h1>This HHHHHHommme Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex repellendus dolorum sed nostrum quae assumenda
                et itaque excepturi possimus, recusandae a, dicta corporis praesentium ut iure ab nulla dolore.
            </p>
            <div>
                <h2>Top services</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 px-5">
                    {
                        // console.log(courses);
                        services.map(service =>

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