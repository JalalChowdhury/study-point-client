import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{

        fetch('./fakeCourse.json')
          .then(res => res.json())
          .then(data => setCourses(data));

    },[])


    const handleAddToCart = (course) =>{
        const newCart = [...cart,course];
        setCart(newCart);
    }
    // console.log(cart);
    

    return (
        <div className="row px-5">
            
            <h3>Top Cources</h3>
            <div className='col-md-9'>
                <div className="courses-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        // console.log(courses);
                        courses.map(course => 
                            
                            <Course
                                key ={course.id}
                                course = {course}
                                handleAddToCart = {handleAddToCart}

                            ></Course>
                        )
                    }

                </div>
            </div>
            <div className="cart-container col-md-3 my-3">
                    <Cart
                        cart = {cart}
                    ></Cart>
            </div>
        </div>
    );
};

export default Courses;