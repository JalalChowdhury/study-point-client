import React, { useEffect, useState } from 'react';
import HomeCourseDetail from '../HomeCourseDetail/HomeCourseDetail';

const Home = () => {

    const [topCourses, setTopCourses] = useState([]);

    useEffect(() => {
        fetch('./fakeHome.JSON')
            .then(res => res.json())
            .then(data => setTopCourses(data));
    }, [])

    return (
        <div>
            <h1>This HHHHHHommme Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex repellendus dolorum sed nostrum quae assumenda
                et itaque excepturi possimus, recusandae a, dicta corporis praesentium ut iure ab nulla dolore.
            </p>
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        // console.log(courses);
                        topCourses.map(course =>

                            <HomeCourseDetail
                                key={course.id}
                                course={course}
                            >
                            </HomeCourseDetail>
                        )
                    }

                </div>
            </div>

        </div>
    );
};

export default Home;